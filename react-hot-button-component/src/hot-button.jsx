import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.numberClick = this.numberClick.bind(this);
  }

  numberClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let className = 'white';
    const count = this.state.count;
    if (count >= 3 && count < 6) {
      className = 'darkPurple';
    } else if (count >= 6 && count < 9) {
      className = 'purple';
    } else if (count >= 9 && count < 12) {
      className = 'lightRed';
    } else if (count >= 12 && count < 15) {
      className = 'lightOrange';
    } else if (count >= 15 && count < 18) {
      className = 'yellow';
    } else {
      className = 'white';
    }
    return <button onClick={this.numberClick} className={className}>Hot Button</button>;
  }
}

export default HotButton;
