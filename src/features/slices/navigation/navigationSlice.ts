import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './navigationSlice.constants';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
});

export const { setCurrentPage, setSearchValue } = navigationSlice.actions;

export default navigationSlice.reducer;
