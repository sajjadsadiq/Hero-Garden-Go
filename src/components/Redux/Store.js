import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducers from "./Reducers/Reducer";

const combinedReducer = combineReducers({
    product:productsReducers
})
export const store = createStore(combinedReducer,composeWithDevTools())

