/* ── Demo conversation script & timing config ── */

export interface DemoFormField {
  fieldId: string;
  label: string;
  type: "select" | "textarea";
  required: boolean;
  options?: { value: string; label: string }[];
  demoValue: string;
}

export interface DemoConfirmRow {
  label: string;
  value: string;
}

export interface DemoLink {
  title: string;
  excerpt: string;
}

/* ── Generic step types ── */

export type ScriptStep =
  | { type: "welcome"; duration: number }
  | { type: "user_typing"; text: string; speed: number; pauseAfter: number }
  | { type: "ai_loading"; duration: number }
  | { type: "ai_text"; text: string; pauseAfter: number }
  | {
      type: "ai_text_form";
      text: string;
      fields: DemoFormField[];
      fieldDelay: number;
      submitPause: number;
      pauseAfter: number;
    }
  | { type: "ai_text_link"; text: string; link: DemoLink; pauseAfter: number }
  | {
      type: "ai_confirm";
      text: string;
      rows: DemoConfirmRow[];
      clickDelay: number;
      pauseAfter: number;
    }
  | { type: "ticket_created"; ticketKey: string; pauseAfter: number };

export interface DemoScenario {
  steps: ScriptStep[];
}

/* ── Thinking phrases (shared) ── */

export const THINKING_PHRASES = [
  "Thinking...",
  "Analyzing...",
  "Working on it...",
  "Processing...",
  "Looking into it...",
];

/* ── Scenario 1: VPN Password Reset (with form) ── */

export const SCENARIO_VPN: DemoScenario = {
  steps: [
    { type: "welcome", duration: 1500 },
    {
      type: "user_typing",
      text: "I need to reset my VPN password",
      speed: 45,
      pauseAfter: 400,
    },
    { type: "ai_loading", duration: 1800 },
    {
      type: "ai_text",
      text: "I can help with that! Let me find the right request type for you...",
      pauseAfter: 1200,
    },
    { type: "ai_loading", duration: 1500 },
    {
      type: "ai_text_form",
      text: "Please fill in the details below:",
      fields: [
        {
          fieldId: "urgency",
          label: "Urgency",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ],
          demoValue: "Medium",
        },
        {
          fieldId: "description",
          label: "Description",
          type: "textarea",
          required: true,
          demoValue:
            "I need my VPN password reset. I'm unable to connect to the corporate network from my home office since this morning.",
        },
      ],
      fieldDelay: 800,
      submitPause: 600,
      pauseAfter: 600,
    },
    { type: "ai_loading", duration: 1500 },
    {
      type: "ai_confirm",
      text: "Here's a summary of your request:",
      rows: [
        { label: "Service Desk", value: "IT Support" },
        { label: "Request Type", value: "VPN / Network Access" },
        { label: "Urgency", value: "Medium" },
        {
          label: "Description",
          value:
            "VPN password reset needed. Unable to connect to corporate network from home office.",
        },
      ],
      clickDelay: 1200,
      pauseAfter: 500,
    },
    { type: "ai_loading", duration: 1200 },
    { type: "ticket_created", ticketKey: "IT-2847", pauseAfter: 800 },
  ],
};

/* ── Scenario 2: Laptop Screen Issue (KB article, text conversation, no form) ── */

export const SCENARIO_LAPTOP: DemoScenario = {
  steps: [
    { type: "welcome", duration: 1500 },
    {
      type: "user_typing",
      text: "My laptop screen keeps flickering",
      speed: 45,
      pauseAfter: 400,
    },
    { type: "ai_loading", duration: 1800 },
    {
      type: "ai_text_link",
      text: "I found an article that might help:",
      link: {
        title: "Display Troubleshooting Guide",
        excerpt:
          "Steps to diagnose and fix common display issues including flickering, blank screens, and resolution problems.",
      },
      pauseAfter: 2000,
    },
    {
      type: "user_typing",
      text: "Thanks, but that's not quite it. It only happens when I connect my external monitor",
      speed: 40,
      pauseAfter: 400,
    },
    { type: "ai_loading", duration: 1500 },
    {
      type: "ai_text",
      text: "I understand! I'll create a request for you. Could you tell me the monitor model and when this started?",
      pauseAfter: 1500,
    },
    {
      type: "user_typing",
      text: "It's a Dell U2722D, started after Monday's Windows update",
      speed: 40,
      pauseAfter: 400,
    },
    { type: "ai_loading", duration: 1500 },
    {
      type: "ai_confirm",
      text: "Here's a summary of your request:",
      rows: [
        { label: "Service Desk", value: "IT Support" },
        { label: "Request Type", value: "Hardware / Display Issue" },
        {
          label: "Description",
          value:
            "Screen flickering when external monitor (Dell U2722D) is connected. Started after Windows update.",
        },
      ],
      clickDelay: 1200,
      pauseAfter: 500,
    },
    { type: "ai_loading", duration: 1200 },
    { type: "ticket_created", ticketKey: "IT-3021", pauseAfter: 800 },
  ],
};

export const SCENARIOS = [SCENARIO_VPN, SCENARIO_LAPTOP];
