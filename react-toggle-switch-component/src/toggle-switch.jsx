import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className={this.state.isClicked ? 'switch on' : 'switch off'} onClick={this.handleClick}>
        <div className={this.state.isClicked ? 'circle right' : 'circle left'}></div>
        <p>{this.state.isClicked ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
