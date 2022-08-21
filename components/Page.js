import styles from "../styles/Page.module.scss";

export default function Page({ children, head, topbar }) {
  return (
    <div className={styles.container}>
      {head}
      {children}
      {topbar}
    </div>
  );
}
