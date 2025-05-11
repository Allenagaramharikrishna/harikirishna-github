import { ACTION_TYPES } from "../action.types/ActionTypes";

export const Increment = (value) => {
  return { type: ACTION_TYPES.INCREMENT, payload: value };
};

export const Decrement = (value) => {
  return { type: ACTION_TYPES.DECREMENT, payload: value };
};
