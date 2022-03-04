import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "./shared/Product";
import Sidebar from "./shared/Sidebar";
import Perload from "./shared/Perload";

//Redux Actions
import { fetchProducts } from "../redux/products/productsAction";

// Style
import styles from "./Store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const filterState = useSelector((state) => state.filterState);

  useEffect(() => {
    !productsState.products.length && dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.productBox}>
        <AnimatePresence>
          {productsState.loading ? (
            <Perload />
          ) : productsState.error ? (
            <p>Something went wrong</p>
          ) : (
            <motion.div animate={{ x: 0, y: 0 }} className={styles.product}>
              {(filterState.filterItems.length
                ? filterState.filterItems
                : productsState.products
              ).map((product) => (
                <Product key={product.id} productData={product} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Store;
