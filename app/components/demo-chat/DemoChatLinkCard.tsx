import styles from "./demo-chat.module.css";
import type { DemoLink } from "./demoScript";

interface DemoChatLinkCardProps {
  link: DemoLink;
}

export default function DemoChatLinkCard({ link }: DemoChatLinkCardProps) {
  return (
    <div className={styles.linkCard}>
      <svg
        className={styles.linkCardIcon}
        viewBox="0 0 24 24"
        width="16"
        height="16"
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
      <div className={styles.linkCardContent}>
        <div className={styles.linkCardTitle}>{link.title}</div>
        <div className={styles.linkCardExcerpt}>{link.excerpt}</div>
      </div>
    </div>
  );
}
