export default function BottomSheet({ children, title }) {
  return (
    <div className="absolute top-0 bottom-0 flex flex-col w-screen gap-4 p-6 text-black bg-white shadow-2xl mt-96 rounded-t-xl dark:text-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-xl">
      <div
        style={{ height: "2px" }}
        className="w-6 transition-opacity duration-200 bg-black rounded-full dark:bg-white hover:bg-opacity-80 place-self-center"
      ></div>

      <h1 style={{ fontSize: "1.2rem" }} className="font-light">
        {title}
      </h1>
      {children}
    </div>
  );
}
