import React, { useContext } from "react";

// Components
import Product from "./shared/Product";
import Sidebar from "./shared/Sidebar";

// Context
import { filterContext } from "../context/FilterContextProvider";
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./Store.module.css";

const Store = () => {
  const { filter } = useContext(filterContext);
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.product}>
        {(filter.filterItems.length > 0 ? filter.filterItems : products).map(
          (product) => (
            <Product key={product.id} productData={product} />
          )
        )}
      </div>
    </div>
  );
};

export default Store;
