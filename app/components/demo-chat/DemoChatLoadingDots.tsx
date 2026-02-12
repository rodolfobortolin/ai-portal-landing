import { useState, useEffect } from "react";
import styles from "./demo-chat.module.css";
import { THINKING_PHRASES } from "./demoScript";

export default function DemoChatLoadingDots() {
  const [idx, setIdx] = useState(
    () => Math.floor(Math.random() * THINKING_PHRASES.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(Math.floor(Math.random() * THINKING_PHRASES.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.loadingDots}>
        <div className={styles.loadingDot} />
        <div className={styles.loadingDot} />
        <div className={styles.loadingDot} />
      </div>
      <span>{THINKING_PHRASES[idx]}</span>
    </div>
  );
}
