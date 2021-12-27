import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

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
    <div className={styles.container}>
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
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
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
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: "ADD_ITEM", payload: productData });
                moveImg(productData.image);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
