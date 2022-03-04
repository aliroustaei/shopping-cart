import React from "react";
import preloader from "../../assets/image/preloader.gif";
import styles from "./Perload.module.css";

const Perload = () => {
  return (
    <div>
      <div className={styles.perload}>
        <img src={preloader} alt="" />
      </div>
    </div>
  );
};

export default Perload;
