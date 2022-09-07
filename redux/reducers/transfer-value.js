import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: '-',
    amount: 0
  };

  export const valueSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
      addNotes: (state, action) => {
        state.notes = (action.payload);
      },
      addAmount: (state, action)=>{
        state.amount = parseInt(action.payload, 10)
      }
    }
  });

  export const { addNotes, addAmount } = valueSlice.actions

export default valueSlice.reducer