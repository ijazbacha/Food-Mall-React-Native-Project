import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = CartSlice.actions

export default CartSlice.reducer