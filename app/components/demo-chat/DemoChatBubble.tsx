import type { ReactNode } from "react";
import styles from "./demo-chat.module.css";
import basePath from "../../../lib/basePath";

interface DemoChatBubbleProps {
  role: "user" | "assistant";
  children: ReactNode;
}

export default function DemoChatBubble({ role, children }: DemoChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`${styles.message} ${isUser ? styles.messageUser : styles.messageAssistant}`}>
      {!isUser && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${basePath}/avatar-valy.jpg`}
          alt=""
          className={styles.messageAvatarImg}
        />
      )}
      <div className={`${styles.bubble} ${isUser ? styles.bubbleUser : styles.bubbleAssistant}`}>
        {children}
      </div>
    </div>
  );
}
