import styles from "./demo-chat.module.css";

interface DemoChatTicketCreatedProps {
  ticketKey: string;
}

export default function DemoChatTicketCreated({
  ticketKey,
}: DemoChatTicketCreatedProps) {
  return (
    <div className={styles.ticketCreated}>
      <svg
        className={styles.ticketCreatedIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <div>
        <div className={styles.ticketCreatedTitle}>
          Request created successfully!
        </div>
        <span className={styles.ticketCreatedLink}>
          {ticketKey} &mdash; Click to follow up
        </span>
      </div>
    </div>
  );
}
