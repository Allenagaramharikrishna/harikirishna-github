import { combineReducers } from "redux";
import { counterReducer } from "../counter-reducer/CounterReducer";
import { counterReducer2 } from "../counter-reducer2/Counter-Reducer2";

export const reducer = combineReducers({
  counterData: counterReducer,
});
