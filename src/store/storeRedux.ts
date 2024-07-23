import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/Selector/selectorSlice';

export const storeRedux = configureStore({
  reducer: {
    selector: selectorReducer
  }
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
