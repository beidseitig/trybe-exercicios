import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNumbers: 0
    }
    this.handleLeft = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.state.clickNumbers % 2 !== 0
      ?  console.log('Verde')
      : console.log();
    
    this.setState((earlyState, _props) => ({
      clickNumbers: earlyState.clickNumbers + 1
    }))    
  }


  render() {
    return (
      <main>
        <button onClick={this.handleClick}>{this.state.clickNumbers}</button>
        <button onClick={this.handleClick}>{this.state.clickNumbers}</button>
        <button onClick={this.handleClick}>{this.state.clickNumbers}</button>
      </main>
      )
  }
}

export default App;
