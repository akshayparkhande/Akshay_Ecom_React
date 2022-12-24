import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'productData',
  initialState: [],
  reducers: {
    addToDesc: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state[0]= action.payload
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToDesc } = productSlice.actions

export default productSlice.reducer