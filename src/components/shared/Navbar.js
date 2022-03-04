import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

// Redux Actions
import { search } from "../../redux/filter/filterAction";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={`${styles.search} ${search}`}
            onChange={(e) => dispatch(search(products, e.target.value))}
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
