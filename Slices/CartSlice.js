import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: { items: [], restaurantName: "" },
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.checkboxState) {
        console.log("ADD TO CART");
        state.selectedItem = {
          items: [...state.selectedItem.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        state.selectedItem = {
          items: [
            ...state.selectedItem.items.filter(
              (item) => item.title != action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log("initialState>>>", state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
