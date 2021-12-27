import React, { useContext } from "react";
import preloader from "../../assets/image/preloader.gif";
import styles from "./Perload.module.css";

//context
import { ProductsContext } from "../../context/ProductContextProvider";

const Perload = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.length === 0 ? (
        <div className={styles.perload}>
          <img src={preloader} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Perload;
