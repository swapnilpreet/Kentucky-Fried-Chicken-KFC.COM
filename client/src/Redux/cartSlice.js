import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
  name: "cart",
  initialState: {
    product: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    AddToCart: (state, action) => {
      const itemIndex = state.product.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.product[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.product.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.product));
    },
    RemoveFromCart: (state, action) => {
      const nextCartItems = state.product.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.product = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.product));
    },
    DecrementCart: (state, action) => {
      const itemIndex = state.product.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.product[itemIndex].cartQuantity > 1) {
        state.product[itemIndex].cartQuantity -= 1;
      } else if (state.product[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.product.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.product = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.product));
    },
    IncrementCart: (state, action) => {
      const itemIndex = state.product.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
        state.product[itemIndex].cartQuantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.product));
    },
    ClearCart:(state,action) => {
      state.product=[];
      localStorage.setItem("cartItems", JSON.stringify(state.product));
    },
    GetTotals:(state,action) => {
      let {total,quantity}=state.product.reduce((cartTotal,cartItem)=>{
        const {price,cartQuantity} = cartItem;
        const itemTotal = price*cartQuantity;
        cartTotal.total+=itemTotal;
        cartTotal.quantity+=cartQuantity;

        return cartTotal;
      },{
        total:0,
        quanity:0,
      }
      );
      state.cartTotalAmount=total;
      state.cartTotalQuantity=quantity;
    }
  },
});
export const {AddToCart, RemoveFromCart, DecrementCart,IncrementCart,ClearCart,GetTotals} = cartSlices.actions;
