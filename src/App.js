import React, { useState, useEffect } from 'react'
import './App.css';
import Squares from './Components/Squares';
import { Patterns } from './Components/Patterns';

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gamer, setGamer] = useState("X");
  const [result, setResult] = useState({ winner: "none", congrats: "none" })

  useEffect(() => {
    move();
    tie();
    if (gamer === "X") {
      setGamer("O");
    } else {
      setGamer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.congrats !== "none") {
      alert(`Game Finished!!! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const choice = (square) => {
    setBoard(board.map((value, index) => {

      if (index === square && value === "") {
        return gamer;
      }
      return value;
    }
    )
    );
  };


  // if (gamer === "X") {
  //   setGamer("0")
  // } else {
  //   setGamer("X")
  // }

  const move = () => {
    Patterns.forEach((currentPattern => {
      const firstGamer = board[currentPattern[0]];
      if (firstGamer === "") return;
      let winningPattern = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstGamer) {
          winningPattern = false;
        }
      });

      if (winningPattern) {
        setResult({ winner: gamer, congrats: "won" });
      }
    }))
  };

  const tie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one", congrats: "tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setGamer("0");
  };

  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <Squares value={board[0]} choice={() => { choice(0); }} />
          <Squares value={board[1]} choice={() => { choice(1); }} />
          <Squares value={board[2]} choice={() => { choice(2); }} />

        </div>
        <div className='row'>
          <Squares value={board[3]} choice={() => { choice(3); }} />
          <Squares value={board[4]} choice={() => { choice(4); }} />
          <Squares value={board[5]} choice={() => { choice(5); }} />

        </div>
        <div className='row'>
          <Squares value={board[6]} choice={() => { choice(6); }} />
          <Squares value={board[7]} choice={() => { choice(7); }} />
          <Squares value={board[8]} choice={() => { choice(8); }} />

        </div>

      </div>

    </div>
  );
}

export default App;
