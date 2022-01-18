import styles from "./loader.module.scss";

const Loader = (props) => (
  <div className={styles["loader-container"]}>
    <i className={styles.loader} />
  </div>
);

Loader.propTypes = {};

export default Loader;
