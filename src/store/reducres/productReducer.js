import { FETCH_PRODUCT, FILTER_PRICE, FILTER_SIAZE } from "../actions/type";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { products: action.data ,filterProducts:action.data};
    case FILTER_SIAZE:
      return {
        ...state,
        size: action.data.size,
        filterProducts: action.data.products,
      };
    case FILTER_PRICE:
      return {
        ...state,
        sort: action.data.sort,
        filterProducts: action.data.products,
      };
    default:
      return state;
  }
};
