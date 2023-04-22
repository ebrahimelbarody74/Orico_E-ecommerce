import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import adminUserSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    auth: adminUserSlice,
    products: productSlice,
    cart: cartSlice,
  },
});
