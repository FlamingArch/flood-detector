import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TopBar, Button } from "..";
import { IconCompass, IconMenu, IconMapSearch, IconBack } from "../Icons";

export default function AppTopBar() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <TopBar
      leading={
        searchVisible ? (
          <Button type="transparent" onClick={() => setSearchVisible(false)}>
            <IconBack className="icon" />
          </Button>
        ) : (
          <Button type="transparent">
            <IconMenu className="icon" />
          </Button>
        )
      }
      title={!searchVisible && "Pasand Bagh, Karim Ganj"}
    >
      {!searchVisible && (
        <Button type="translucent" onClick={() => setSearchVisible(true)}>
          <IconMapSearch className="icon" />
        </Button>
      )}

      <AnimatePresence>
        {searchVisible && (
          <motion.div
            initial={{ width: `0px` }}
            animate={{ width: `100%` }}
            transition={{ stiffness: 10 }}
            exit={{ width: `0px` }}
            className="w-full bg-white rounded-lg shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-black dark:bg-opacity-60"
          >
            <input
              className="w-full p-3 bg-transparent rounded-lg placeholder:font-light placeholder:text-opacity-50"
              placeholder="Search Location"
              type="text"
              name=""
              id=""
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="translucent">
        <IconCompass className="icon" />
      </Button>
    </TopBar>
  );
}
