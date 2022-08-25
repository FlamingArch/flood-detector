import { useState, useEffect } from "react";
import Styles from "./Styles";

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

  const expandSheet = () => {
    if (lastHeight == null) {
      setLastHeight(top);
      setTop(128);
    } else {
      setTop(lastHeight);
      setLastHeight(null);
    }
  };

  const { alignments, effects, styles, getTop } = Styles.bottomSheet;
  return (
    <div className={alignments + effects + styles} style={getTop(top, window)}>
      <DragHandle onClick={expandSheet}></DragHandle>
      <SheetHeading title={title} />
      {children}
    </div>
  );
}

const DragHandle = ({ onClick }) => (
  <div className={Styles.dragHandle} onClick={onClick}></div>
);

const SheetHeading = ({ title }) => (
  <h1 style={Styles.bottomSheet.heading}>{title}</h1>
);
