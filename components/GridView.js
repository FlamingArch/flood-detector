const GridView = ({ children, className, leading }) => {
  const gridLayoutStyles =
    "grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-2";
  const visualStyles = "p-6 overflow-scroll pb-48";

  return (
    <div className="flex flex-col h-full overflow-scroll">
      {leading}
      <div className={`${gridLayoutStyles} ${visualStyles} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default GridView;
