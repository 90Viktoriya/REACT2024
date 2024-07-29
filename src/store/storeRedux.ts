import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/slices/selector/selectorSlice';
import navigationReducer from '../features/slices/navigation/navigationSlice';
import { apiRTK } from '../services/apiRTK';

export const storeRedux = configureStore({
  reducer: {
    selector: selectorReducer,
    [apiRTK.reducerPath]: apiRTK.reducer,
    navigation: navigationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiRTK.middleware)
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
