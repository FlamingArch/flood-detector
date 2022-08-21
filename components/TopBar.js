import styles from "../styles/TopBar.module.scss";

function TopBar({ leading, title, children }) {
  return (
    <div className={styles.topbar}>
      {leading}
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}

export default TopBar;
