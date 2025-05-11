import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState = [
  { id: 1, todo: "Add Task", completed: false },
  { id: 2, todo: "Add Task", completed: true },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};
