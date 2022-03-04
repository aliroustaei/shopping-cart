import axios from "axios";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

const fetchProductsFail = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAIL",
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        console.log(products);
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFail(errorMsg));
      });
  };
};
