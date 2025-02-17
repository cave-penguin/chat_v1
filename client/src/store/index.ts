import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import { ThunkAction, ThunkMiddleware } from "redux-thunk";
import { UnknownAction } from "redux";

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

export default store;
