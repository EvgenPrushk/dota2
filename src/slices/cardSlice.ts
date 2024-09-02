import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  id: number;
  color: string;
}

const initialState: ListItem[] = [];

const csrdSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      if (state.length < 5) {
        state.unshift(action.payload);
      } else {
        console.warn('Cannot add more than 5 items');
      }
    },
    removeItem: (state) => {
      state.pop();
    },
  },
});

export const { addItem, removeItem } = csrdSlice.actions;
export default csrdSlice.reducer;
