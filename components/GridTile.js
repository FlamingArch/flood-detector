const GridTile = ({
  children,
  leading,
  trailing,
  className,
  onClick,
  containerClassName,
  leadingStyles,
  trailingStyles,
}) => {
  const containerStylesColors =
    "bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 text-black dark:text-white";
  const containerStylesEffects =
    "shadow-lg hover:shadow-2xl transition-shadow rounded-2xl aspect-square";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
      className={`${containerStylesColors} ${containerStylesEffects} ${className}`}
      onClick={onClick}
    >
      <div className={"flex flex-row w-full " + leadingStyles}>{leading}</div>
      <div className={`flex flex-col p-4 w-auto ${containerClassName}`}>
        {children}
      </div>
      <div className={"flex flex-row w-full " + trailingStyles}>{trailing}</div>
    </div>
  );
};
export default GridTile;
