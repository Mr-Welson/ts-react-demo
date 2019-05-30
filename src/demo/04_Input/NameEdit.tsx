import * as React from 'react';

interface IProps {
  initName: string;
  onChange: (name: string) => void;
}

interface IState {
  name: string;
}

class NameEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: props.initName
    }
  }

  HandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.onChange(this.state.name)
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <label> 
          <span>点击修改name: </span> 
          <input type="text" value={name} onChange={this.HandleNameChange}/>
          <button onClick={this.handleSubmit}>Change</button>
        </label>
      </>
    )
  }
}


export default NameEdit;
