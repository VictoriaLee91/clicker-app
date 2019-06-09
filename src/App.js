import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Math.floor(Math.random() * 100),
      show: true
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decreaseClick = () => {

    this.setState({ count: this.state.count - 1 });
  }

  resetToZero = () => {
    this.setState({ count: this.state.count = 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count === 0 ? 'Press me!' : `You have pressed the button ${count} ${count > 1 ? 'times!' : 'time!'}`}</h1>
        <button onClick={this.handleClick}>PRESS ME</button>
        { //when the count is > 0, if true show button, else no button
          this.state.count > 0 ? <button onClick={this.decreaseClick}>Decrease</button>
            : null

        }
        <button onClick={this.resetToZero}> RESET</button>

      </div>
    )
  }
}

export default App

