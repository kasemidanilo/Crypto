import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers/index";
import thunk from "redux-thunk";

const storeEnhancers = compose;

const store = createStore(rootReducers, storeEnhancers(applyMiddleware(thunk)));

export default store;
