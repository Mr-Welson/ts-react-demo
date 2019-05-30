import * as React from 'react';
import Button from './Button';
import { ThemeContext } from './themeContext';


const Container: React.SFC<{}> = () => {
  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <>
          <Button onClick={() => changeTheme('red')}>红</Button>
          <Button onClick={() => changeTheme('green')}>绿</Button>
          <Button onClick={() => changeTheme('blue')}>蓝</Button>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

export default Container