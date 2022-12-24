import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartCounter',
  initialState: [],
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload)
    },
    removeItem: (state,action) => {
      let curInd  = state.findIndex((el)=>el.id === action.payload);
      state.splice(curInd,1)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, removeItem, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer