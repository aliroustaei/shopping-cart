import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

// Redux Actions
import {
  addItem,
  removeItem,
  decrease,
  increase,
} from "../../redux/cart/cartAction";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const [img, setImg] = useState("");

  const rateColor = (rate) => {
    if (rate > 4) {
      return "rateGreen";
    } else if (rate > 3) {
      return "rateOrange";
    } else {
      return "rateRed";
    }
  };

  const moveImg = (e) => {
    setImg(e);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.container}
    >
      {img && (
        <div className={styles.imgBoxMove}>
          <img className={styles.cardImageMove} src={img} alt="product" />
        </div>
      )}
      <div className={styles.imgBox}>
        <img
          className={styles.cardImage}
          src={productData.image}
          alt="product"
        />
      </div>
      <h3>{shorten(productData.title)}</h3>
      <div className={styles.priceBox}>
        <p>{`${productData.price} $`}</p>
        <span className={rateColor(productData.rating.rate)}>
          {productData.rating.rate}
        </span>
      </div>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(productData))}
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(addItem(productData));
                moveImg(productData.image);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
