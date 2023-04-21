import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducres/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, enhancer(applyMiddleware(reduxThunk)));

export default store;
