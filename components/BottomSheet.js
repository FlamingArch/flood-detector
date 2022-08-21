import { useState } from "react";

export default function BottomSheet({ children, title }) {
  const containerEffects =
    " backdrop-filter backdrop-blur-xl rounded-t-xl shadow-2xl";
  const containerStyles =
    " text-black dark:text-white bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60";
  const containerAlignments =
    " absolute bottom-0 flex flex-col w-screen gap-4 p-6 almostlg:transition-all lg:transition-all lg:w-96 lg:mx-6";

  const [top, setTop] = useState((window.innerHeight * 2) / 3);

  return (
    <div
      className={containerAlignments + containerEffects + containerStyles}
      style={{ top: `${top}px` }}
    >
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
