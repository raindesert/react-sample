import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Game/>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Mix"
    };
  }
  query(){
    let param = {state:"CA"};
    axios.post("http://localhost:8080/test/findCity",JSON.stringify(param),
         {
           method:"POST",
           mode:"cors",
           headers: {"Content-Type": "application/json"},
        }
      ).then((res)=>{
        console.error(JSON.stringify(res.data));
        this.setState({
          cityName: JSON.stringify(res.data)
        });
    })
  }
  render() {
    return (
      <button className="square" onClick={()=>this.query()}>
        {this.state.cityName}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Click to Change';

    return (
      <div>
        <div className="status" id="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}




export default App;
