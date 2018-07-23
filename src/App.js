import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function query(){
  let param = {state:"CA"};
  axios.post("http://localhost:8080/test/findCity",JSON.stringify(param),
       {
         method:"POST",
         mode:"cors",
         headers: {"Content-Type": "application/json"},
      }
    ).then((res)=>{
      console.log(res.data);
  })
}
class App extends Component {
  render() {
    return (
      <Game/>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={()=>query()}>
        {}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status" id="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
