import * as React from 'react';
import ListItem from './ListItem';
import { ITodo, ITodoList, ACTION_TYPE, ITodoAction } from '../typings/index';

type IProps = {
  todos: ITodoList;
  todosDispatch: (data: ITodoAction) => void;
};

const List: React.FC<IProps> = ({ todos, todosDispatch }) => {
  const onDelete = (id: number) => {
    todosDispatch({ type: ACTION_TYPE.DELETE_TODO, payload: id });
  };
  const onToggle = (id: number) => {
    todosDispatch({ type: ACTION_TYPE.TOGGLE_TODO, payload: id });
  };
  return <div>{!!todos.length && todos.map((v: ITodo) => <ListItem key={v.id} todoItem={v} onDelete={onDelete} onToggle={onToggle}></ListItem>)}</div>;
};

export default List;
