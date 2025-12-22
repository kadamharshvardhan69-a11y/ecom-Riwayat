import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authslice";
import cartReducer from "./Cartslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
