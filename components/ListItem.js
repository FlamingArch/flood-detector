export default function ListItem({ leading, trailing, children, title }) {
  return (
    <div className="flex flex-row gap-4 p-4 bg-white rounded-lg shadow-xl dark:bg-black">
      {leading}
      <div className="flex flex-col w-full">
        <p className="text-lg">{title}</p>
        {children}
      </div>
      {trailing}
    </div>
  );
}
