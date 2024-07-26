import { storeRedux } from './storeRedux';

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
