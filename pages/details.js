import { ListItem, TopBar, Button } from "../components";
import { IconBack } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DetailsPage({ title, data, visibility }) {
  return (
    <AnimatePresence>
      {visibility.visible && (
        <DetailsPageContent title={title} data={data} visibility={visibility} />
      )}
    </AnimatePresence>
  );
}

function DetailsPageContent({ title, data, visibility }) {
  const [translateWidth, setTranslateWidth] = useState(
    window.innerWidth > 1024 ? 384 : window.innerWidth
  );

  window.onresize = () => {
    setTranslateWidth(window.innerWidth > 1024 ? 384 : window.innerWidth);
  };

  let obj = data ?? [];

  return (
    <motion.div
      initial={{
        translateX: translateWidth,
      }}
      animate={{ translateX: 0 }}
      exit={{
        translateX: translateWidth,
      }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="z-30 shadow-2xl absolute top-0 left-0 lg:left-[unset] w-screen h-screen pt-32 overflow-hidden bg-white lg:right-0 lg:w-96 dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-xl lg:transition-all almostlg:transition-all"
    >
      <TopBar
        title={title}
        leading={
          visibility.setVisible && (
            <Button
              type="translucent"
              onClick={() => visibility.setVisible(false)}
            >
              <IconBack className="icon" />
            </Button>
          )
        }
      />
      <div className="flex flex-col h-full gap-6 p-6 overflow-scroll">
        {obj.map((e, index) => (
          <ListItem key={index}>
            <div className="flex flex-row w-full text-black space-between dark:text-white">
              <p className="flex-grow font-bold">{e.label}</p>
              <p>{e.value}</p>
            </div>
          </ListItem>
        ))}
      </div>
    </motion.div>
  );
}
