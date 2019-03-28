import * as React from 'react';
import CountContainer from './components/CountContainer';

import './App.css';

class App extends React.Component {

  componentDidMount() {
    // fetch('/api/user/v1/login', {
    //   method: 'POST',
    //   headers: {
    //     'accept': 'application/json; charset=utf-8',
    //     'content-type': 'application/json; charset=utf-8'
    //   },
    //   body: JSON.stringify({"loginName":"wwj","userPassword":"YTEyMzQ1Ng==","identifyCode":"9527"})
    // })
    // .then(res => res.json)
    // .then(result => console.log(result))
  }

  public render() {
    return (
      <div className="App">
        <CountContainer name='welson'/>
      </div>
    );
  }
}

export default App;
