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
  const styles = {
    container:
      "bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 text-black dark:text-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl aspect-square",
    leading: "flex flex-row w-full ",
    trailing: "flex flex-row w-full ",
    content: "flex flex-col p-4 w-auto overflow-hidden",
  };

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
