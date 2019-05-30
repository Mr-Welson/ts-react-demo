import * as React from 'react';

interface IProps {
  name: string;
  disabled: boolean;
  onChange: (name: string) => void;
  onSubmit: () => void;
}


class NameEdit extends React.Component<IProps, {}> {

  HandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { name, onSubmit, disabled } = this.props;
    return (
      <>
        <label> 
          <span>带禁用的按钮: </span> 
          <input
            type="text"
            value={name}
            onChange={this.HandleNameChange}
          />
          <button
            disabled={disabled}
            onClick={onSubmit}
          >Change</button>
        </label>
      </>
    )
  }
}


export default NameEdit;
