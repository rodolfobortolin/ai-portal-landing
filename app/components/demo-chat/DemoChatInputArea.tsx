"use client";

import { useState } from "react";
import styles from "./demo-chat.module.css";
import type { DemoLink } from "./demoScript";

interface DemoChatInputAreaProps {
  typedText: string;
  showCursor: boolean;
  isSent: boolean;
  links?: DemoLink[];
}

export default function DemoChatInputArea({
  typedText,
  showCursor,
  isSent,
  links = [],
}: DemoChatInputAreaProps) {
  const [linksExpanded, setLinksExpanded] = useState(false);

  return (
    <>
      {links.length > 0 && (
        <div className={styles.linksSection}>
          <button
            type="button"
            className={styles.linksBar}
            onClick={() => setLinksExpanded((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span>
              {links.length} link{links.length > 1 ? "s" : ""}
            </span>
            <svg
              className={`${styles.linksBarChevron} ${linksExpanded ? styles.linksBarChevronOpen : ""}`}
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {linksExpanded && (
            <div className={styles.linksList}>
              {links.map((link, i) => (
                <div key={i} className={styles.linksListItem}>
                  <span className={styles.linksListTitle}>{link.title}</span>
                  <svg
                    className={styles.linksListIcon}
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className={styles.inputArea}>
        <button type="button" className={styles.attachBtn} aria-label="Attach file">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
        </button>
        <div className={styles.inputField}>
          {typedText}
          {showCursor && <span className={styles.typingCursor} />}
          {!typedText && !showCursor && (
            <span style={{ color: "#97a0af" }}>Type your message...</span>
          )}
        </div>
        <button
          type="button"
          className={`${styles.sendBtn} ${!isSent && !typedText ? styles.sendBtnDisabled : ""}`}
        >
          Send
        </button>
      </div>
    </>
  );
}
