import styles from "./demo-chat.module.css";
import basePath from "../../../lib/basePath";

export default function DemoChatWelcome() {
  return (
    <div className={styles.welcome}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/avatar-valy.jpg`}
        alt=""
        className={styles.welcomeAvatarImg}
      />
      <div className={styles.welcomeTitle}>Hi! How can I help you?</div>
      <div className={styles.welcomeSubtitle}>
        Describe what you need and I&apos;ll find the right service request for you.
      </div>
    </div>
  );
}
