import React from "react";
import ReacDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      timeIn: null,
      timeOut: null,
      timeDiff: null,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  clockIn = () => {
    this.setState({
      timeIn: this.state.time,
    });
  };

  clockOut = () => {
    this.setState({
      timeOut: this.state.time,
    });
  };

  clockDiff = () => {
    const { timeIn, timeOut } = this.state;
    if (!timeIn || !timeOut) {
      return;
    }
    const diff = Math.abs(timeOut - timeIn);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const timeDiff = `${hours}h ${minutes}m ${seconds}s`;
    this.setState({
      timeDiff: timeDiff,
    });
  };

  render() {
    return (
      <div className="App-header">
        <h1>CLOCK</h1>
        <h2>{this.state.time.toLocaleTimeString()} </h2>
        <h4>Time In: {this.state.timeIn && this.state.timeIn.toLocaleTimeString()}</h4>
        <button className="btn" onClick={this.clockIn}>Time In</button> 
        <h4>Time Out: {this.state.timeOut && this.state.timeOut.toLocaleTimeString()}</h4>
        <button className="btn" onClick={this.clockOut}>Time Out</button>
        <h4>Time Difference: {this.state.timeDiff}</h4>
        <button className="btn" onClick={this.clockDiff}>Time Difference</button>
      </div>
    );
  }
}


export default Clock;
