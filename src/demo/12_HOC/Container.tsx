import * as React from 'react';
import Button from './Button';
import { withThemeContext } from './themeContext';

interface IProps {
  changeTheme: (value: string) => void
}

const Container = ({ changeTheme }: IProps) => {
  return (
    <>
      <Button onClick={() => changeTheme('red')}>红</Button>
      <Button onClick={() => changeTheme('green')}>绿</Button>
      <Button onClick={() => changeTheme('blue')}>蓝</Button>
    </>
  )
}

export default withThemeContext(Container)