import { TopBar, Button } from ".";
import { Icon, IconBack, IconCompass, iconData } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import _ from "lodash";
import { AppContext } from "./context";
import { GridView } from ".";
import GridTile from "./GridTile";
import Styles from "./Styles";
import { useContext } from "react";

export default function DetailsPage() {
  const {
    detailsVisibility,
    setDetailsVisibility,
    detailsData: data,
  } = useContext(AppContext);

  const not_gov = false;

  const visibility = {
    visible: detailsVisibility,
    setVisible: setDetailsVisibility,
  };

  return (
    <AnimatePresence>
      {visibility.visible && (
        <DetailsPageContent
          data={data}
          visibility={visibility}
          not_gov={not_gov}
        />
      )}
    </AnimatePresence>
  );
}

function DetailsPageContent({ data, visibility, not_gov }) {
  const [xWidth, setXWidth] = useState(
    window.innerWidth > 1024 ? 480 : window.innerWidth
  );

  window.onresize = () => {
    setXWidth(window.innerWidth > 1024 ? 480 : window.innerWidth);
  };

  const styles = Styles.details;
  return (
    <motion.div
      initial={{ translateX: xWidth }}
      animate={{ translateX: 0 }}
      exit={{ translateX: xWidth }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={styles.page}
    >
      <TopBar
        title={data.title || "Unnamed Road"}
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
      {not_gov ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-12 m-5 mb-5 text-3xl text-center text-white bg-yellow-500 shadow-2xl aspect-square rounded-xl">
          <div className="flex-grow">Not a PMGYS Road</div>
        </div>
      ) : (
        <GridView
          leading={
            <>
              {not_gov && (
                <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 p-12 m-5 mb-5 text-3xl text-center text-white bg-yellow-500 shadow-2xl aspect-square rounded-xl">
                  <div className="flex-grow">Not a PMGYS Road</div>
                  <p className="text-sm">Keep swiping to read anyways.</p>
                </div>
              )}
              {_.lowerCase(data["class"]) == "flood" && (
                <div className="flex flex-col items-center justify-center gap-4 p-12 m-5 mb-5 text-3xl text-center text-white bg-red-500 shadow-2xl aspect-square rounded-xl">
                  <div className="px-8 py-2 text-3xl text-red-700 bg-white border-2 border-white rounded-full w-fit">
                    ALERT
                  </div>
                  Flood Expected
                </div>
              )}
            </>
          }
        >
          {Object.keys(data).map((e, i) => {
            if (e == "title") return null;
            if (e == "allow") return null;
            if (e == "class") return null;

            return (
              <GridTile
                key={i}
                contentStyles={styles.valueStyles}
                trailingStyles={styles.labelStyles}
                leadingStyles={styles.labelStyles}
                trailing={
                  <>
                    <Icon data={iconData[e]} className="icon" />{" "}
                    {_.startCase(e)}
                  </>
                }
              >
                {typeof data[e] == "number" ? (
                  <>{Math.round(data[e])}</>
                ) : (
                  <>{data[e]}</>
                )}
              </GridTile>
            );
          })}
        </GridView>
      )}
    </motion.div>
  );
}
