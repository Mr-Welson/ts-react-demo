import * as React from 'react';
import { HelloReact } from './demo/01_HelloReact/index';

import './App.css';

class App extends React.Component {

  public render() {
    return (
      <div className="root-wrapper">
        <HelloReact />
      </div>
    );
  }
}

export default App;
