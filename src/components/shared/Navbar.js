/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context
import { CartContext } from "../../context/CartContextProvider";
import { ProductsContext } from "../../context/ProductContextProvider";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const { setProducts } = useContext(ProductsContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    let search = e.target.search.value;
    const data = await getProducts();

    if (search) {
      let filter_products = data.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );

      if (filter_products.length === 0) {
        toast.warn("No product found");
      } else {
        setProducts(filter_products);
      }
    } else {
      toast.warn("Please enter the product name");
    }
  };

  const produtsPage = async () => {
    setProducts(await getProducts());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link
          className={styles.productLink}
          onClick={produtsPage}
          to="/products"
        >
          Products
        </Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search"
            name="search"
            placeholder="Search"
            className={styles.search}
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
