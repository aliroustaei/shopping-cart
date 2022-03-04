const initialState = {
  filterItems: [],
  priceData: [1, 500],
  ratingData: [1, 3],
};

const filterReducer = (filter = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      if (action.value !== "") {
        const searchData = action.payload.filter((item) =>
          item.title.toLowerCase().includes(action.value.toLowerCase())
        );
        return { ...filter, filterItems: [...searchData] };
      } else {
        return { ...filter, filterItems: [...action.payload] };
      }

    case "CATEGORY":
      if (action.value !== "all") {
        const categoryData = action.payload.filter(
          (item) => item.category.toLowerCase() === action.value.toLowerCase()
        );
        return { ...filter, filterItems: [...categoryData] };
      } else {
        return { ...filter, filterItems: [...action.payload] };
      }

    case "PRICE":
      filter.priceData = [...action.value];
      const priceData = action.payload.filter(
        (item) => item.price >= action.value[0] && item.price <= action.value[1]
      );
      return { ...filter, filterItems: [...priceData] };

    case "RATING":
      filter.ratingData = [...action.value];

      const ratingData = action.payload.filter(
        (item) =>
          item.rating.rate >= action.value[0] &&
          item.rating.rate <= action.value[1]
      );
      return { ...filter, filterItems: [...ratingData] };

    default:
      return filter;
  }
};

export default filterReducer;
