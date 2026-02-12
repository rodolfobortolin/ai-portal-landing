"use client";

import { useReducer, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./demo-chat.module.css";
import DemoChatHeader from "./DemoChatHeader";
import DemoChatMessages from "./DemoChatMessages";
import DemoChatWelcome from "./DemoChatWelcome";
import DemoChatBubble from "./DemoChatBubble";
import DemoChatLoadingDots from "./DemoChatLoadingDots";
import DemoChatDynamicForm from "./DemoChatDynamicForm";
import DemoChatLinkCard from "./DemoChatLinkCard";
import DemoChatTicketConfirm from "./DemoChatTicketConfirm";
import DemoChatTicketCreated from "./DemoChatTicketCreated";
import DemoChatInputArea from "./DemoChatInputArea";
import { SCENARIOS } from "./demoScript";

/* ── State ── */

interface DemoState {
  scenarioIdx: number;
  stepIdx: number;
  typedChars: number;
  typingSent: boolean;
  filledFields: Record<string, string>;
  formSubmitted: boolean;
  confirmClicked: boolean;
  done: boolean;
}

type DemoAction =
  | { type: "NEXT_STEP" }
  | { type: "TYPE_CHAR" }
  | { type: "TYPING_SENT" }
  | { type: "FILL_FIELD"; fieldId: string; value: string }
  | { type: "SUBMIT_FORM" }
  | { type: "CLICK_CONFIRM" }
  | { type: "MARK_DONE" }
  | { type: "RESET"; scenarioIdx: number };

function reducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, stepIdx: state.stepIdx + 1, typedChars: 0, typingSent: false };
    case "TYPE_CHAR":
      return { ...state, typedChars: state.typedChars + 1 };
    case "TYPING_SENT":
      return { ...state, typingSent: true };
    case "FILL_FIELD":
      return {
        ...state,
        filledFields: { ...state.filledFields, [action.fieldId]: action.value },
      };
    case "SUBMIT_FORM":
      return { ...state, formSubmitted: true };
    case "CLICK_CONFIRM":
      return { ...state, confirmClicked: true };
    case "MARK_DONE":
      return { ...state, done: true };
    case "RESET":
      return {
        scenarioIdx: action.scenarioIdx,
        stepIdx: 0,
        typedChars: 0,
        typingSent: false,
        filledFields: {},
        formSubmitted: false,
        confirmClicked: false,
        done: false,
      };
    default:
      return state;
  }
}

function randomScenarioIdx() {
  return Math.floor(Math.random() * SCENARIOS.length);
}

/* ── Component ── */

interface DemoChatModalProps {
  onClose: () => void;
}

export default function DemoChatModal({ onClose }: DemoChatModalProps) {
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    (): DemoState => ({
      scenarioIdx: randomScenarioIdx(),
      stepIdx: 0,
      typedChars: 0,
      typingSent: false,
      filledFields: {},
      formSubmitted: false,
      confirmClicked: false,
      done: false,
    })
  );

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const scenario = SCENARIOS[state.scenarioIdx];

  const handleRestart = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Always alternate to the other scenario on restart
    dispatch({ type: "RESET", scenarioIdx: (state.scenarioIdx + 1) % SCENARIOS.length });
  }, [state.scenarioIdx]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /* ── Step-based transitions ── */
  useEffect(() => {
    if (state.done) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    const step = scenario.steps[state.stepIdx];
    if (!step) {
      dispatch({ type: "MARK_DONE" });
      return;
    }

    switch (step.type) {
      case "welcome":
        timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.duration);
        break;

      case "user_typing":
        if (!state.typingSent) {
          if (state.typedChars < step.text.length) {
            timerRef.current = setTimeout(() => dispatch({ type: "TYPE_CHAR" }), step.speed);
          } else {
            dispatch({ type: "TYPING_SENT" });
          }
        } else {
          timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.pauseAfter);
        }
        break;

      case "ai_loading":
        timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.duration);
        break;

      case "ai_text":
        timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.pauseAfter);
        break;

      case "ai_text_form":
        if (!state.formSubmitted) {
          const unfilledField = step.fields.find((f) => !state.filledFields[f.fieldId]);
          if (unfilledField) {
            timerRef.current = setTimeout(() => {
              dispatch({
                type: "FILL_FIELD",
                fieldId: unfilledField.fieldId,
                value: unfilledField.demoValue,
              });
            }, step.fieldDelay);
          } else {
            timerRef.current = setTimeout(() => dispatch({ type: "SUBMIT_FORM" }), step.submitPause);
          }
        } else {
          timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.pauseAfter);
        }
        break;

      case "ai_text_link":
        timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.pauseAfter);
        break;

      case "ai_confirm":
        if (!state.confirmClicked) {
          timerRef.current = setTimeout(() => dispatch({ type: "CLICK_CONFIRM" }), step.clickDelay);
        } else {
          timerRef.current = setTimeout(() => dispatch({ type: "NEXT_STEP" }), step.pauseAfter);
        }
        break;

      case "ticket_created":
        timerRef.current = setTimeout(() => dispatch({ type: "MARK_DONE" }), step.pauseAfter);
        break;
    }
  }, [
    scenario,
    state.scenarioIdx,
    state.stepIdx,
    state.typedChars,
    state.typingSent,
    state.filledFields,
    state.formSubmitted,
    state.confirmClicked,
    state.done,
  ]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  /* ── Input area state ── */
  const activeStep = state.done ? null : scenario.steps[state.stepIdx];
  let typedText = "";
  let showCursor = false;
  if (activeStep?.type === "user_typing" && !state.typingSent) {
    typedText = activeStep.text.slice(0, state.typedChars);
    showCursor = true;
  }

  /* ── Render steps ── */
  const stepsToRender = scenario.steps.slice(0, state.stepIdx + 1);
  const visibleLinks = stepsToRender
    .filter((s): s is Extract<typeof s, { type: "ai_text_link" }> => s.type === "ai_text_link")
    .map((s) => s.link);

  return createPortal(
    <>
      {/* Backdrop */}
      <div className={styles.overlay} onClick={onClose} />

      {/* Modal */}
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Demo chat">
        <DemoChatHeader onClose={onClose} onRestart={handleRestart} />

        <DemoChatMessages>
          {stepsToRender.map((step, i) => {
            const isActive = i === state.stepIdx && !state.done;
            const isCompleted = i < state.stepIdx || state.done;

            switch (step.type) {
              case "welcome":
                if (isActive) return <DemoChatWelcome key={i} />;
                return null;

              case "user_typing":
                if (isCompleted || (isActive && state.typingSent)) {
                  return (
                    <DemoChatBubble key={i} role="user">
                      <p>{step.text}</p>
                    </DemoChatBubble>
                  );
                }
                return null;

              case "ai_loading":
                if (isActive) return <DemoChatLoadingDots key={i} />;
                return null;

              case "ai_text":
                return (
                  <DemoChatBubble key={i} role="assistant">
                    <p>{step.text}</p>
                  </DemoChatBubble>
                );

              case "ai_text_form":
                return (
                  <DemoChatBubble key={i} role="assistant">
                    <p>{step.text}</p>
                    <DemoChatDynamicForm
                      fields={step.fields}
                      filledValues={state.filledFields}
                      isSubmitted={isCompleted || state.formSubmitted}
                      isFilling={isActive && !state.formSubmitted}
                    />
                  </DemoChatBubble>
                );

              case "ai_text_link":
                return (
                  <DemoChatBubble key={i} role="assistant">
                    <p>{step.text}</p>
                    <DemoChatLinkCard link={step.link} />
                  </DemoChatBubble>
                );

              case "ai_confirm":
                return (
                  <DemoChatBubble key={i} role="assistant">
                    <p>{step.text}</p>
                    <DemoChatTicketConfirm
                      rows={step.rows}
                      isClicked={isCompleted || state.confirmClicked}
                    />
                  </DemoChatBubble>
                );

              case "ticket_created":
                return (
                  <DemoChatBubble key={i} role="assistant">
                    <DemoChatTicketCreated ticketKey={step.ticketKey} />
                  </DemoChatBubble>
                );

              default:
                return null;
            }
          })}
        </DemoChatMessages>

        <DemoChatInputArea
          typedText={typedText}
          showCursor={showCursor}
          isSent={state.stepIdx > 0}
          links={visibleLinks}
        />

        <div className={styles.demoBadge}>
          <span className={styles.demoBadgeText}>Interactive Demo</span>
        </div>
      </div>
    </>,
    document.body
  );
}
