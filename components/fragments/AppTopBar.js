import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TopBar, Button } from "..";
import {
  IconCompass,
  IconMenu,
  IconMapSearch,
  IconBack,
  IconSearch,
} from "../Icons";
import { AppContext } from "../../pages/context";
export default function AppTopBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const {
    searchTerm,
    setSearchTerm,
    searchLocation,
    fetchLocation,
    locationName,
  } = useContext(AppContext);

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
      title={!searchVisible && `${locationName || "Bhicholi Hapsi, Indore"}`}
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
            className="flex flex-row w-full bg-white rounded-lg shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-black dark:bg-opacity-60"
          >
            <input
              className="flex-grow p-3 bg-transparent rounded-lg outline-none placeholder:font-light placeholder:text-opacity-50"
              placeholder="Search Location"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={() => searchLocation()}
              onKeyDown={(e) => {
                e.key == "Enter" && searchLocation();
              }}
            />
            <Button type="transparent" onClick={() => searchLocation()}>
              <IconSearch className="icon" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="translucent" onClick={() => fetchLocation()}>
        <IconCompass className="icon" />
      </Button>
    </TopBar>
  );
}
