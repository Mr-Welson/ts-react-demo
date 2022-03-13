import * as React from 'react';
import { ITodo } from '../typings';

type IProps = {
  onAdd: (todo: ITodo) => void;
};

const Input: React.FC<IProps> = ({ onAdd }): React.ReactElement => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAdd = (): void => {
    // 类型断言
    // const text = (inputRef.current as HTMLInputElement).value.trim();
    const text = inputRef.current!.value.trim();
    if (!text) {
      alert('请输入待办项');
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text,
      done: false,
    };
    onAdd(newTodo);

    inputRef.current!.value = '';
  };

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='请输入待办项' />
      <button onClick={handleAdd}>添加</button>
    </div>
  );
};

export default Input;
