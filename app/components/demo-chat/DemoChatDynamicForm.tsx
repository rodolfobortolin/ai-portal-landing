import { useEffect, useRef } from "react";
import styles from "./demo-chat.module.css";
import type { DemoFormField } from "./demoScript";

interface DemoChatDynamicFormProps {
  fields: DemoFormField[];
  filledValues: Record<string, string>;
  isSubmitted: boolean;
  isFilling: boolean;
}

export default function DemoChatDynamicForm({
  fields,
  filledValues,
  isSubmitted,
  isFilling,
}: DemoChatDynamicFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as demo value types in
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [filledValues]);

  return (
    <div className={styles.dynamicForm}>
      {fields.map((field) => {
        const val = filledValues[field.fieldId] || "";
        const hasValue = !!val;

        return (
          <div key={field.fieldId} className={styles.formField}>
            <label
              className={`${styles.formLabel} ${field.required ? styles.formLabelRequired : ""}`}
            >
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                className={`${styles.formSelect} ${isFilling && !hasValue ? styles.formFilling : ""}`}
                value={val}
                disabled={isSubmitted}
                onChange={() => {}}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <textarea
                ref={field.type === "textarea" ? textareaRef : undefined}
                className={`${styles.formTextarea} ${isFilling && !hasValue ? styles.formFilling : ""}`}
                value={val}
                readOnly
                disabled={isSubmitted}
                rows={2}
              />
            )}
          </div>
        );
      })}
      <button
        type="button"
        className={`${styles.formSubmit} ${isSubmitted ? styles.formSubmitDone : ""}`}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </div>
  );
}
