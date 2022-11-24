import { createStore } from "redux";

//action type 선언
// as const: string이 아닌 실제 '값'을 type으로 갖는다.
const ADD = "ADDTODO" as const;
// const DELETE = "DELTODO" as const;

export const addTodo = (todo: string) => ({ type: ADD, payload: todo });

type ActionObj = {
  type: string;
  payload: string;
};

type Todos = string[];

const initialState: Todos = [];

const todoReducer = (state: Todos = initialState, action: ActionObj) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    // case DELETE:
    //   return state.filter();
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
