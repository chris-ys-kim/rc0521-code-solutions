import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, initial: 0 };

    this.tick = this.tick.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
    this.buttonPressed = this.buttonPressed.bind(this);
    this.iconSwitch = this.iconSwitch.bind(this);
  }

  tick() {
    this.setState({ initial: this.state.initial + 1 });
  }

  play() {
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  pause() {
    clearInterval(this.timerID);
  }

  resetWatch() {
    if (!this.state.isClicked) {
      this.setState({ initial: 0 });
    }
  }

  buttonPressed(event) {
    if (this.state.isClicked) {
      this.pause();
    } else {
      this.play();
    }
    this.setState({ isClicked: !this.state.isClicked });
    event.stopPropagation();
  }

  iconSwitch() {
    if (this.state.isClicked) {
      return 'fas fa-pause-circle';
    } else {
      return 'fas fa-play-circle';
    }
  }

  render() {
    return (
      <div>
      <div className='circle' onClick = {this.resetWatch}>
        <span className='number'>{this.state.initial}</span>
      </div>
      <div className="secondDiv">
          <i className={this.iconSwitch()} onClick={this.buttonPressed}></i>
        </div>
      </div >
    );
  }
}
