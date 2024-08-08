import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/slices/selector/selectorSlice';
import navigationReducer from '../features/slices/navigation/navigationSlice';

export const storeRedux = configureStore({
  reducer: {
    selector: selectorReducer,
    navigation: navigationReducer
  }
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
