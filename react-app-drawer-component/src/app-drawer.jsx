import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
  }

  handleClick() {
    // if (this.state.isClicked === true) {
    //   this.setState({ isClicked: false });
    // } else {
    //   this.setState({ isClicked: true });
    // }

    // Toggling between true and false
    this.setState({ isClicked: !this.state.isClicked });
  }

  modalToggle() {
    if (this.state.isClicked) {
      return 'modalOn';
    } else {
      return 'modalOff';
    }
  }

  // modalOff() {
  //   if (this.state.isClicked === true) {
  //     return 'modalOff';
  //   } else {
  //     return 'modalOn';
  //   }
  // }

  render() {
    return (
    <div className={ this.modalToggle() } onClick={this.handleClick}>
      <i className={ this.state.isClicked ? 'hidden' : 'fas fa-bars' } onClick={this.handleClick}></i>
      <div className={ this.state.isClicked ? 'tabContainer' : 'hidden'}>
        <h1>Menu</h1>
        <p onClick={this.handleClick}>About</p>
        <p onClick={this.handleClick}>Get Started</p>
        <p onClick={this.handleClick}>Sign In</p>
      </div>
    </div>
    );
  }
}
