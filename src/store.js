import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const middleware = [thunk, logger];

export const store = createStore(counterReducer, applyMiddleware(...middleware));