import Styles from "./Styles";

export default function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ borderRadius: "10px" }}
      className={Styles.button(type)}
    >
      <div className="p-4 transition-all duration-400 hover:opacity-60 dark:hover:opacity-60">
        {children}
      </div>
    </button>
  );
}
