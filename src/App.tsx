import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { routeList, IRoute } from './routes';

import './App.css';

class App extends React.Component {

  public render() {
    return (
      <div className="root-wrapper">
        <ul className='root-menu'>
          {routeList.map(v => (
            <li key={v.path}>
              <NavLink 
                to={v.path}
                activeStyle={{
                  color: "red"
                }}
              >{v.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className='root-content'>
          {routeList.map((v: IRoute) => (
            <Route key={v.path} path={v.path} component={v.component}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
