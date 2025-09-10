import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Item added!",
          text: "Your item was successfully added to the cart.",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Item already exist!",
          text: "Your item was already added to cart.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
