import * as React from 'react';
import { ITodos, ITodoItem } from './common';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css';

interface IContainerState {
  readonly todos: ITodos
}

class TodoListContainer extends React.Component<{}, IContainerState> {

  constructor(props: {}){
    super(props);
    this.state= {
      todos: []
    }
  }

  addTodoItem = (todoItem: ITodoItem) => {
    const { todos } = this.state;
    todos.push(todoItem);
    this.setState({
      todos
    })
  }

  onItemClick = (id: number) => {
    const { todos } = this.state;
    const item = todos.find(v => v.id === id) as ITodoItem;
    item.isDone = !item.isDone;
    this.setState({
      todos
    })
  }

  public render() {
    const { todos } = this.state;
    return (
      <div className='todo-list-app-container'>
        <AddTodo addTodoItem={this.addTodoItem}/>
        <TodoList onItemClick={this.onItemClick} todos={todos} />
      </div>
    )
  }
}

export default TodoListContainer