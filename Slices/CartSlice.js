import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedItem: { items:[], restaurantName:""}
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) =>{
      state.selectedItem = {
        items: [state.selectedItem.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log("state>>>", state)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions

export default CartSlice.reducer