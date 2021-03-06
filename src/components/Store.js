import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

      <motion.div animate={{ x: 0, y: 0 }} className={styles.product}>
        <AnimatePresence>
          {(filter.filterItems.length > 0 ? filter.filterItems : products).map(
            (product) => (
              <Product key={product.id} productData={product} />
            )
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Store;
