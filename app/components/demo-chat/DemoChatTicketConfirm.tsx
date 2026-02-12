import styles from "./demo-chat.module.css";
import type { DemoConfirmRow } from "./demoScript";

interface DemoChatTicketConfirmProps {
  rows: DemoConfirmRow[];
  isClicked: boolean;
}

export default function DemoChatTicketConfirm({
  rows,
  isClicked,
}: DemoChatTicketConfirmProps) {
  return (
    <div className={styles.ticketConfirm}>
      {rows.map((row) => (
        <div key={row.label} className={styles.confirmRow}>
          <span className={styles.confirmLabel}>{row.label}:</span>
          <span className={styles.confirmValue}>{row.value}</span>
        </div>
      ))}
      <div className={styles.confirmActions}>
        <button
          type="button"
          className={`${styles.confirmBtn} ${styles.confirmBtnYes} ${isClicked ? styles.confirmBtnYesActive : ""}`}
          disabled={isClicked}
        >
          {isClicked ? "Creating..." : "Yes, create it"}
        </button>
        <button
          type="button"
          className={`${styles.confirmBtn} ${styles.confirmBtnNo}`}
          disabled={isClicked}
        >
          No, go back
        </button>
      </div>
    </div>
  );
}
