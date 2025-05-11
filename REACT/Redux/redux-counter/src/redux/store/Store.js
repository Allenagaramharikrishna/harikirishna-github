import { createStore } from "redux";
import {rootReducer} from './Store';
import { reducer } from "..//common-reducer/Common-Reducer";

export const store = createStore(reducer, {});
