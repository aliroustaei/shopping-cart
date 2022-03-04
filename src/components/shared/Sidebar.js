import React from "react";
import { Range } from "rc-slider";
import { useSelector, useDispatch } from "react-redux";
//styles
import styles from "./Sidebar.module.css";
import "rc-slider/assets/index.css";
// Redux Actions
import { rating, category, price } from "../../redux/filter/filterAction";

//icon
import shirt from "../../assets/icons/shirt.png";
import money from "../../assets/icons/money.png";
import favourites from "../../assets/icons/favourites.png";

const Sidebar = () => {
  const filter = useSelector((state) => state.filterState);
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>
        <div className={styles.filteTitle}>
          <img src={shirt} alt="bag" />
          <p>Category</p>
        </div>
        <select onChange={(e) => dispatch(category(products, e.target.value))}>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="all">all category</option>
        </select>
      </div>
      <div className={styles.filterBox}>
        <div className={styles.filteTitle}>
          <img src={money} alt="bag" />
          <p>Price</p>
        </div>
        <Range
          min={1}
          max={1000}
          Value={filter.priceData}
          defaultValue={filter.priceData}
          onAfterChange={(e) => dispatch(price(products, e))}
        />
        <div className={styles.filteInfo}>
          <p>from: {filter.priceData[0]} $</p>
          <p>to: {filter.priceData[1]} $</p>
        </div>
      </div>
      <div className={styles.filterBox}>
        <div className={styles.filteTitle}>
          <img src={favourites} alt="favourites" />

          <p>Rating</p>
        </div>
        <Range
          min={1}
          max={5}
          dots={5}
          marks={{ 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" }}
          Value={filter.ratingData}
          defaultValue={filter.ratingData}
          onAfterChange={(e) => dispatch(rating(products, e))}
        />
      </div>
    </div>
  );
};

export default Sidebar;
