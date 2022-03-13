import * as React from 'react';
import { ITodo } from '../typings/index';

type IProps = {
  todoItem: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<IProps> = ({ todoItem, onDelete, onToggle }) => {
  const { id, text, done } = todoItem;
  return (
    <div>
      <label>
        <input checked={done} onChange={() => onToggle(id)} type='checkbox' />
        <span
          style={{
            textDecoration: done ? 'line-through' : '',
          }}
        >
          {text}
        </span>
      </label>
      <button onClick={() => onDelete(id)}>删除</button>
    </div>
  );
};

export default ListItem;
