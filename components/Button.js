import styles from "../styles/Button.module.scss";

export default function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ borderRadius: "10px" }}
      className={styles[type]}
    >
      <div className="p-4 transition-all duration-400 hover:opacity-60 dark:hover:opacity-60">
        {children}
      </div>
    </button>
  );
}
