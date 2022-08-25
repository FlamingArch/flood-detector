import styles from "../styles/DragHandle.module.scss";

const DragHandle = ({ onClick }) => (
  <div className={styles.container} onClick={onClick}>
    <div className={styles.handle} />
  </div>
);

export default DragHandle;
