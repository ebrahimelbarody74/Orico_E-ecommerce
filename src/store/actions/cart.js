import { ADD_CART, REMOVE_CART } from "../actions/type";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id == product.id) {
        p.Qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, Qty: 1 });
    }
    dispatch({
      type: ADD_CART,
      data: {
        cartItems: cartItemsClone,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItemsClone));
  };
};

export const removeToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    const all = cartItemsClone.filter((p) => p.id !== product.id);
    dispatch({
      type: REMOVE_CART,
      data: {
        cartItems: all,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(all));
  };
};
