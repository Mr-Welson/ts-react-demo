import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import Count from './Count';
// 类组件（容器组件）

interface IProps {
  name: string;
  age?: number;
}

interface IState {
  count: number;
}

class Container extends React.Component<IProps, IState> {

  input:HTMLInputElement;
  constructor(props:IProps) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    // 报错
    // this.setState({
    //   a: '',
    //   c: 2
    // })
    // const oInput = ReactDOM.findDOMNode<HTMLInputElement>(this.input);
    // console.log((oInput!).value);
  }

  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  };

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div> 
        <h2> hello {name} </h2>
        {/* <input type="text" value='xxx' ref={input => this.input = input}/> */}
        <Count count={count} />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Container;


