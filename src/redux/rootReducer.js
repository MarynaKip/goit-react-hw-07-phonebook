import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import phoneBook from "./phoneBook/reducer";

const persistConfig = {
  key: "phoneBook",
  storage,
};

const phoneBookReducer = persistReducer(persistConfig, phoneBook);

export default combineReducers({ phoneBook: phoneBookReducer });
