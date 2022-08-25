import { useState, useEffect } from "react";
import styles from "../styles/BottomSheet.module.scss";
import { DragHandle } from ".";

export default function BottomSheet({ children, title }) {
  const [top, setTop] = useState(1000);
  const [window, setWindow] = useState({ innerHeight: 100 });
  const [lastHeight, setLastHeight] = useState(null);
  var defaultHeight = true;

  useEffect(() => {
    setWindow(global.window);
    setTop((global.window.innerHeight * 2) / 3);
    global.window.onresize = () => {
      if (defaultHeight) setTop((global.window.innerHeight * 2) / 3);
    };
  }, [defaultHeight]);

  const getTop = (top, { innerHeight }) => {
    return {
      top: `${top > innerHeight * 0.1 ? top : innerHeight * 0.1 ?? 128}px`,
    };
  };

  const expandSheet = () => {
    if (lastHeight == null) {
      setLastHeight(top);
      setTop(128);
    } else {
      setTop(lastHeight);
      setLastHeight(null);
    }
  };

  return (
    <div className={styles.sheet} style={getTop(top, window)}>
      <DragHandle onClick={expandSheet} />
      <SheetHeading title={title} />
      <div className="flex flex-col gap-4 p-6 overflow-scroll">{children}</div>
    </div>
  );
}

const SheetHeading = ({ title }) => <h1 className={styles.heading}>{title}</h1>;
