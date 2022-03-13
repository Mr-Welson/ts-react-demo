import * as React from 'react';
import Input from './components/Input';
import List from './components/List';
import { ITodo, ITodoList, ACTION_TYPE, ITodoAction } from './typings';

type ITodoReducer = (state: ITodoList, action: ITodoAction) => ITodoList;

const todoReducer: ITodoReducer = (state, action): ITodoList => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return [...state, payload as ITodo];
    case ACTION_TYPE.DELETE_TODO:
      return state.filter((v) => v.id !== (payload as number));
    case ACTION_TYPE.TOGGLE_TODO:
      // 此处必须返回新的 state, 直接修改原有state, 视图不会更新
      const newState = state.map((v) => {
        return {
          ...v,
          done: v.id === payload ? !v.done : v.done,
        };
      });
      return newState;
    default:
      return state;
  }
};

const initialTodoList: ITodoList = [];

const App = () => {
  const [todos, todosDispatch]: [ITodoList, React.Dispatch<ITodoAction>] = React.useReducer(todoReducer, initialTodoList);

  const onAdd = (todo: ITodo) => {
    todosDispatch({ type: ACTION_TYPE.ADD_TODO, payload: { ...todo } });
  };

  return (
    <div>
      <Input onAdd={onAdd}></Input>
      <List todos={todos} todosDispatch={todosDispatch}></List>
    </div>
  );
};

export default App;
