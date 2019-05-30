import * as React from 'react';
import ThemeProvider from './themeContext';
import BtnContainer from './Container';
import Button from './Button'
import './index.css';

class ReactContext extends React.Component<{},{}> {

  public render() {
    return (
      <ThemeProvider>
        <BtnContainer></BtnContainer>
        <Button>按钮</Button>
      </ThemeProvider>
    )
  }
}

export default ReactContext;