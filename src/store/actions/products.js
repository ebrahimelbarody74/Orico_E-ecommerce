import { FETCH_PRODUCT, FILTER_PRICE, FILTER_SIAZE } from "./type";

export const fetchProduct = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCT,
          data: data,
        });
      });
  };
};

export const handelSize = (products, value) => {
  return (dispatch) => {
    let productClone = [...products];
    let newProduct = productClone.filter((e) => e.sizes.indexOf(value) != 1);
    dispatch({
      type: FILTER_SIAZE,
      data: {
        size: value,
        products: value == "All" ? products : newProduct,
      },
    });
  };
};

export const handelPrice = (products, value) => {
  return (dispatch) => {
    let productClone = [...products];
    let newProduct = productClone.sort((a, b) => {
      if (value == "Lowest") {
        return a.price - b.price;
      } else if (value == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_PRICE,
      data: {
        sort: value,
        products: newProduct,
      },
    });
  };
};
