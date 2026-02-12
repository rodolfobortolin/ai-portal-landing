import styles from "./demo-chat.module.css";
import basePath from "../../../lib/basePath";

interface DemoChatHeaderProps {
  onClose: () => void;
  onRestart: () => void;
}

export default function DemoChatHeader({ onClose, onRestart }: DemoChatHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/avatar-valy.jpg`}
          alt=""
          className={styles.headerAvatarImg}
        />
        <span>AI Assistant</span>
      </div>
      <div className={styles.headerActions}>
        <button
          type="button"
          className={styles.newConvBtn}
          onClick={onRestart}
          aria-label="New conversation"
          title="New conversation"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
}
