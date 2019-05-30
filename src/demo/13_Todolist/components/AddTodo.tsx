import * as React from 'react';
import { ITodoItem } from '../common';

interface IAddTodoProps {
  addTodoItem(item: ITodoItem): void
}

interface IAddTodoState {
  text: string
}

let id: number = 0;

class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {

  constructor(props: IAddTodoProps) {
    super(props);
    this.state = {
      text: ''
    }
  }

  inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.target.value.trim()
    })
  }

  addTodoItem = () => {
    const { text } = this.state;
    if(text.trim()) {
      const todoItem: ITodoItem = {
        id: id++,
        isDone: false,
        text
      }
      this.props.addTodoItem(todoItem);
      this.setState({
        text: ''
      })
    }
  }

  public render() {
    const { text } = this.state;
    return (
      <div className='add-todo-container'>
        <input 
          type="text" 
          value={text}
          placeholder="请输入待办项" 
          onChange={this.inputChange}
        />
        <button onClick={this.addTodoItem}>
          添加
        </button>
      </div>
    )
  }
}

export default AddTodo