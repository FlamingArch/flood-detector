export default function Button({ type, children, onClick }) {
  const getButtonStyle = (type) => {
    const styles = "";
    switch (type) {
      case "translucent":
        return (
          styles +
          "bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-lg transition-all duration-400 shadow-lg hover:shadow-xl"
        );
      case "transparent":
        return (
          styles +
          "hover:bg-white hover:dark:bg-black hover:bg-opacity-60 hover:dark:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-lg transition-all duration-400 hover:shadow-xl"
        );
    }
    return styles;
  };

  return (
    <button
      onClick={onClick}
      style={{ borderRadius: "10px" }}
      className={getButtonStyle(type)}
    >
      <div className="p-4 transition-all duration-400 hover:opacity-60 dark:hover:opacity-60">
        {children}
      </div>
    </button>
  );
}
