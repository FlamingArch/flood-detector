import Styles from "./Styles";

const GridTile = ({
  children,
  leading,
  trailing,
  className,
  onClick,
  contentStyles,
  leadingStyles,
  trailingStyles,
}) => {
  const styles = Styles.gridTile;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
      className={`${styles.container} ${className}`}
      onClick={onClick}
    >
      <div className={`${styles.trailing} ${leadingStyles}`}>{leading}</div>
      <div className={`${styles.content} ${contentStyles}`}>{children}</div>
      <div className={`${styles.trailing} ${trailingStyles}`}>{trailing}</div>
    </div>
  );
};
export default GridTile;
