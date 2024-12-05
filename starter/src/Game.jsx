import React from "react";

function computerChoice() {
  let factor = Math.trunc(Math.random() * 1500);
  if (factor < 500) return "rock";
  if (factor > 500 && factor < 1000) return "paper";
  return "scissors";
}

function Game() {
  const rockImg = "✊";
  const paperImg = "✋";
  const scissorsImg = "✌️";
  return (
    <div className="game-area">
      <div className="scores">
        <p className="score">Player: 1/5</p>
        <p className="score">Computer: 2/5</p>
      </div>

      <h2 className="result">computer won🎉🎉</h2>

      <div className="choice-display">
        <div className="choice">
          <p className="choice-img">{rockImg}</p>
          <p className="choice-text">rock</p>
        </div>
        <p className="vs">vs</p>
        <div className="choice">
          <p className="choice-img">{scissorsImg}</p>
          <p className="choice-text">scissors</p>
        </div>
      </div>

      <div className="restart-button-wrapper">
        <p>Choose your move, Rock, Paper or Scissors?</p>
        <button disabled={true}>new game</button>
      </div>

      <div className="player-choices-btns">
        <button>rock</button>
        <button>paper</button>
        <button>scissors</button>
      </div>
    </div>
  );
}

export default Game;
