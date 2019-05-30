import * as React from 'react';
import { ITodos } from '../common';

interface ITodoListProps {
  todos: ITodos
  onItemClick(id: number): void
}

class TodoList extends React.Component<ITodoListProps, {}> {
  public render() {
    const { todos, onItemClick } = this.props;
    return (
      <ul className='todo-list-container'>
        {todos.map(v => (
          <li 
            className={`todo-item ${v.isDone ? 'done' : 'undone'}`}
            key={v.id}
            onClick={() => onItemClick(v.id)}
          >
            { v.text }
          </li>
        ))}
      </ul>
    )
  }
}

export default TodoList