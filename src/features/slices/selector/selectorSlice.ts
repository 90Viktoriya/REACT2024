import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectedItem } from './selectorSlice.interface';
import { initialState } from './selectorSlice.constants';

export const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<selectedItem>) => {
      state.selectedItems.push(action.payload);
      state.count += 1;
    },
    remove: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter((item) => item.uid !== action.payload);
      state.count -= 1;
    },
    removeAll: (state) => {
      state.selectedItems = [];
      state.count = 0;
    }
  }
});

export const { add, remove, removeAll } = selectorSlice.actions;

export default selectorSlice.reducer;
