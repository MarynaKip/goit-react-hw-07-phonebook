import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  console.groupEnd(action.type);
  return next(action);
};

// const thunk = ({ dispatch, getState }) => (next) => (action) =>
//   typeof action === "function" ? action(dispatch, getState) : next(action);

// const enhancers = [applyMiddleware(loggerMiddleware), applyMiddleware(thunk)];
const enhancers = [applyMiddleware(loggerMiddleware)];
const composedEnhancer = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancer);
