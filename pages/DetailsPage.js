import { ListItem, TopBar, Button } from "../components";
import { IconBack } from "../components/Icons";
import { motion } from "framer-motion";

export default function DetailsPage({ obj, closeFunction }) {
  return (
    <motion.div
      initial={{
        translateX: window.innerWidth > 1024 ? 384 : window.innerWidth,
      }}
      animate={{ translateX: 0 }}
      exit={{
        translateX: window.innerWidth > 1024 ? 384 : window.innerWidth,
      }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="z-30 absolute top-0 left-0 lg:left-[unset] w-screen h-screen pt-32 overflow-hidden bg-white lg:right-0 lg:w-96 dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-xl lg:transition-all almostlg:transition-all"
    >
      <TopBar
        title="NH-24 (Kanpur Road)"
        leading={
          <Button type="translucent" onClick={() => closeFunction()}>
            <IconBack className="icon" />
          </Button>
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
