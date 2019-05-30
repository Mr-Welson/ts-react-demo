import * as React from 'react';

// 使用接口定义 props 的规范
interface IProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Edit = ({name, onChange}:IProps) => (
  <>
    <label> 
      <span>同步修改name: </span>       
      <input type="text" value={name} onChange={onChange}/>
    </label>
  </>
);

export default Edit;
