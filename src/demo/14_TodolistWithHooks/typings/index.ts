export interface ITodo {
  id: number
  text: string;
  done: boolean;
}

export type ITodoList = readonly ITodo[]

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  DELETE_TODO = 'deleteTodo',
  TOGGLE_TODO = 'toggleTodo',
}

export interface ITodoAction {
  type: ACTION_TYPE;
  payload: ITodo | number;
}