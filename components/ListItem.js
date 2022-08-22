export default function ListItem({
  leading,
  trailing,
  children,
  title,
  onClick,
}) {
  return (
    <div
      className="flex flex-row gap-4 p-4 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-black"
      onClick={onClick}
    >
      {leading}
      <div className="flex flex-col w-full">
        <p className="text-lg">{title}</p>
        {children}
      </div>
      {trailing}
    </div>
  );
}
