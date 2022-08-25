const Styles = {
  button: (type) => {
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
  },
  bottomSheet: {
    effects: " backdrop-filter backdrop-blur-xl rounded-t-xl shadow-2xl",
    styles:
      " text-black dark:text-white bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60",
    alignments:
      " absolute bottom-0 flex flex-col w-screen gap-4 p-6 almostlg:transition-all lg:transition-all lg:w-96 lg:mx-6",
    getTop: (top, window) => {
      return {
        top: `${
          top > window.innerHeight * 0.1 ? top : window.innerHeight * 0.1 ?? 128
        }px`,
      };
    },
    heading: { fontSize: "1.2rem", fontWeight: 300 },
  },
  dragHandle:
    "w-6 transition-opacity duration-200 bg-black rounded-full cursor-ns-resize dark:bg-white hover:bg-opacity-80 place-self-center h-[2px]",
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
