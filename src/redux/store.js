// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info("dispatching", action);
//   console.groupEnd(action.type);
//   return next(action);
// };

// // const thunk = ({ dispatch, getState }) => (next) => (action) =>
// //   typeof action === "function" ? action(dispatch, getState) : next(action);

// // const enhancers = [applyMiddleware(loggerMiddleware), applyMiddleware(thunk)];
// const enhancers = [applyMiddleware(loggerMiddleware)];
// const composedEnhancer = composeWithDevTools(...enhancers);

//export const store = createStore(rootReducer, composedEnhancer);

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);
