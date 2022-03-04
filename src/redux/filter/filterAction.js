const search = (products, value) => {
  return {
    type: "SEARCH",
    value: value,
    payload: products,
  };
};

const category = (products, value) => {
  return {
    type: "CATEGORY",
    value: value,
    payload: products,
  };
};

const price = (products, value) => {
  return {
    type: "PRICE",
    value: value,
    payload: products,
  };
};

const rating = (products, value) => {
  return {
    type: "RATING",
    value: value,
    payload: products,
  };
};

export { search, category, price, rating };
