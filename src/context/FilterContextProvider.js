import React, { createContext, useContext, useReducer } from "react";
import { ProductsContext } from "./ProductContextProvider";

export const filterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);

  const initialState = {
    filterItems: [],
    priceData: [1, 500],
    ratingData: [1, 3],
  };

  const filterReducer = (filter, action) => {
    switch (action.type) {
      case "search":
        if (action.value !== "") {
          const searchData = products.filter((item) =>
            item.title.toLowerCase().includes(action.value.toLowerCase())
          );
          return { ...filter, filterItems: [...searchData] };
        } else {
          return { ...filter, filterItems: [...products] };
        }

      case "category":
        if (action.value !== "all") {
          const categoryData = products.filter(
            (item) => item.category.toLowerCase() === action.value.toLowerCase()
          );
          return { ...filter, filterItems: [...categoryData] };
        } else {
          return { ...filter, filterItems: [...products] };
        }

      case "price":
        filter.priceData = [...action.value];
        const priceData = products.filter(
          (item) =>
            item.price >= action.value[0] && item.price <= action.value[1]
        );
        return { ...filter, filterItems: [...priceData] };

      case "rating":
        filter.ratingData = [...action.value];

        const ratingData = products.filter(
          (item) =>
            item.rating.rate >= action.value[0] &&
            item.rating.rate <= action.value[1]
        );
        return { ...filter, filterItems: [...ratingData] };

      default:
        break;
    }
  };

  const [filter, dispatch] = useReducer(filterReducer, initialState);

  return (
    <filterContext.Provider value={{ filter, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContextProvider;
