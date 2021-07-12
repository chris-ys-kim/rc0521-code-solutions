import React from 'react';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', valid: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.iconSwitch = this.iconSwitch.bind(this);
    this.errMsg = this.errMsg.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ valid: true });
    event.preventDefault();
  }

  iconSwitch() {
    if (this.state.value.length < 8) {
      return 'far fa-times-circle';
    } else {
      return 'far fa-check-circle';
    }
  }

  errMsg() {
    if (this.state.value.length === 0) {
      return 'A password is required';
    } else if (this.state.value.length < 8) {
      return 'Your password is too short';
    } else {
      return '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='Password'>
          Password:
        </label>
        <input id='password' name='name' type='password' value={this.state.value} onChange={this.handleChange} />
        <i className={this.state.valid ? this.iconSwitch() : 'hidden'}></i>
        <p>{this.state.valid ? this.errMsg() : ''}</p>
      </form>
    );
  }
}
