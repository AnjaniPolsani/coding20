// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isStarted: false, timeMinutes: 0, timeSeconds: 0}

  componentWillUnmount = () => {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  onIncrement = () => {
  
    this.setState(prevState => ({timeSeconds: prevState.timeSeconds + 1}))
  }

  onStartStop = () => {
    const {isStarted} = this.state
    if (isStarted) {
      this.clearTimeInterval()
    } else {
      this.timerId = setInterval(this.onIncrement, 1000)
    }
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState({isStarted: false, timeMinutes: 0, timeSeconds: 0})
  }

  formatTime = () => {
    const {timeMinutes, timeSeconds} = this.state
    const remainingSec = timeMinutes * 60 + timeSeconds
    const minutes = Math.floor(remainingSec / 60)
    const seconds = Math.floor(remainingSec % 60)
    const formattedminutes = minutes > 9 ? minutes : `0${minutes}`
    const formattedseconds = seconds > 9 ? seconds : `0${seconds}`
    return `${formattedminutes}:${formattedseconds}`
  }

  render() {
    const {isStarted} = this.state
    const disableButton = isStarted
    return (
      <div className="cont">
        <h1>StopWatch</h1>
        <div>
          <h1>Timer</h1>
          <h1>{this.formatTime()}</h1>
          <button disabled={isStarted} onClick={this.onStartStop}>
            Start
          </button>
          <button disabled={!isStarted} onClick={this.onStartStop}>
            Stop
          </button>
          <button onClick={this.onReset} disabled={disableButton}>
            Reset
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
      </div>
    )
  }
}
export default StopWatch
