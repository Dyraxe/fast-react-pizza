import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaid: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload === newIte
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload === pizzaId
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// (state) => state.reduce(reducer, { total: 0, quantity: 0 });
const reducer = (acc, curr) => {
  acc.total += curr.totalPrice;
  acc.quantity += curr.quantity;
  return acc;
};
export const getCartPriceAndQuantity = createSelector(
  (state) => state.cart,
  (cart) => cart.reduce(reducer, { total: 0, quantity: 0 }),
);
export const getCart = (state) => state.cart.cart;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
// export const getCartQuantity = (state) => state.cart.cart.reduce(reducer, 0);
// export const getCartTotalPrice = (state) =>
//   state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
