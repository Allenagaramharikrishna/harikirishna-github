import { ACTION_TYPES } from "../action.types/ActionTypes";

const initialState = {
  count: 0,
  count1: 0,
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + action.payload };

    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
