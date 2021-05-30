import { combineReducers, createStore } from "redux";
import treeReducer from "./Reducers/treeReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    trees : treeReducer

})
export const store = createStore(combinedReducer,composeWithDevTools())