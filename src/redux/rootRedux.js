import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import showsReducer from "./slices/showsSlice";

import { persistReducer } from "redux-persist";

import persistConfig from "./persistConfig";

const RootReducer = combineReducers({
  sidebar: sidebarReducer, 
shows:showsReducer
});

const persistedReducer = persistReducer(persistConfig, RootReducer);
export default persistedReducer;
