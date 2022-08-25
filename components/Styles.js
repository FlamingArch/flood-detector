const Styles = {
  gridTile: {
    container:
      "bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 text-black dark:text-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl aspect-square",
    leading: "flex flex-row w-full ",
    trailing: "flex flex-row w-full ",
    content: "flex flex-col p-4 w-auto",
  },
  details: {
    valueStyles: "justify-center items-center text-[2rem] font-extralight",
    labelStyles: "p-4 justify-center items-center gap-1 font-bold",
    page: "pt-20 overflow-hidden shadow-2xl bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 backdrop-filter backdrop-blur-xl z-30 absolute top-0 left-0 lg:left-[unset] w-screen h-screen lg:right-0 lg:w-96 lg:transition-all almostlg:transition-all ",
  },
};

export default Styles;
