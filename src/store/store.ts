import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducers/RootReducer";

export const store = createStore(RootReducer, {}, composeWithDevTools());
