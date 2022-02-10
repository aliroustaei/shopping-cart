/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context
import { CartContext } from "../../context/CartContextProvider";
import { filterContext } from "../../context/FilterContextProvider";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const { dispatch } = useContext(filterContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <form>
          <input
            type="text"
            className="search"
            name="search"
            placeholder="Search"
            className={styles.search}
            onChange={(e) =>
              dispatch({ type: "search", value: e.target.value })
            }
          />
        </form>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopIcon} alt="img" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
