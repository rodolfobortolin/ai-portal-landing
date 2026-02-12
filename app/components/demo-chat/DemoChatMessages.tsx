import { useRef, useEffect, type ReactNode } from "react";
import styles from "./demo-chat.module.css";

interface DemoChatMessagesProps {
  children: ReactNode;
}

export default function DemoChatMessages({ children }: DemoChatMessagesProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className={styles.messages}>
      {children}
      <div ref={endRef} />
    </div>
  );
}
