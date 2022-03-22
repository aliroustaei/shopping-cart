import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/icons/shop.svg";

// Redux Actions
import { search } from "../../redux/filter/filterAction";

// Style
import styles from "./Navbar.module.css";
import { Handbag, Search, List, XLg } from "react-bootstrap-icons";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();

  const [scrollNav, setScrollNav] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  });

  return (
    <nav className="containerLayout">
      <div
        className={
          scrollNav
            ? `${styles.mainContainer} ${styles.active}`
            : `${styles.mainContainer}`
        }
      >
        <div className={styles.container}>
          <div className={styles.navLeft}>
            <Link className={styles.productLink} to="/products">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.menuList}>
            <Link className={styles.menuItem} to="/products">
              Home
            </Link>
            <p className={styles.menuItem}>Men</p>
            <p className={styles.menuItem}>Woman</p>
            <p className={styles.menuItem}>Events</p>
          </div>
          <div className={styles.navRight}>
            <div className={styles.searchBox}>
              <input
                type="text"
                name="search"
                placeholder="Search"
                className={styles.inputSearch}
                onChange={(e) => dispatch(search(products, e.target.value))}
              />
              <div className={styles.searchIconBox}>
                <Search
                  className={styles.searchIcon}
                  size="25px"
                  cursor="pointer"
                />
              </div>
            </div>
            <div className={styles.iconContainer}>
              <Link to="/cart">
                <Handbag size="28px" color="inherit" />
              </Link>
              <span>{state.itemsCounter}</span>
            </div>
            <div
              className={styles.burgerIcon}
              onClick={() => setMobileMenu(true)}
            >
              <List size="28px" />
            </div>
            <button type="button">Sign in</button>
          </div>
        </div>
      </div>
      <div
        className={
          mobileMenu
            ? `${styles.mobileMenu} ${styles.activeMenu}`
            : styles.mobileMenu
        }
      >
        <div className={styles.menuListMobile}>
          <div
            className={styles.mobileClose}
            onClick={() => setMobileMenu(false)}
          >
            <XLg size="28px" />
          </div>
          <Link className={styles.menuItemMobile} to="/products">
            Home
          </Link>
          <p className={styles.menuItemMobile}>Men</p>
          <p className={styles.menuItemMobile}>Woman</p>
          <p className={styles.menuItemMobile}>Events</p>
        </div>
        <div
          className={styles.mobileBg}
          onClick={() => setMobileMenu(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
