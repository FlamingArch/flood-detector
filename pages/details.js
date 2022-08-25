import { TopBar, Button } from "../components";
import { IconBack, IconCompass } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import _ from "lodash";
import { GridView } from "../components";
import GridTile from "../components/GridTile";
import Styles from "../components/Styles";

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
  const [xWidth, setXWidth] = useState(
    window.innerWidth > 1024 ? 384 : window.innerWidth
  );

  window.onresize = () => {
    setXWidth(window.innerWidth > 1024 ? 384 : window.innerWidth);
  };

  let obj = data ?? [];

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
      <GridView>
        {Object.keys(obj).map((e, i) => (
          <GridTile
            key={i}
            contentStyles={styles.valueStyles}
            trailingStyles={styles.labelStyles}
            leadingStyles={styles.labelStyles}
            trailing={
              <>
                <IconCompass className="icon" /> {_.capitalize(e)}
              </>
            }
          >
            {obj[e]}
          </GridTile>
        ))}
      </GridView>
    </motion.div>
  );
}
