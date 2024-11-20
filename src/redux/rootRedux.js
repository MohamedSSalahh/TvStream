import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

import { persistReducer } from "redux-persist";

import persistConfig from "./persistConfig";

const RootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);
export default persistedReducer;
