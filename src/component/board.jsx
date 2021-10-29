import React, { useState } from "react";
import GameField from "./gameField";

const Board = () => {
  const [play, setPlay] = useState(0);

  const start = () => {
    console.log("start");

    play ? setPlay(0) : setPlay(1);
  };

  return (
    <div className="container">
      <button onClick={() => start()} className="btn btn-start" disabled={play}>
        Start
      </button>
      <button onClick={() => start()} className="btn btn-stop" disabled={!play}>
        Stop
      </button>
      <GameField play={play} />
    </div>
  );
};

export default Board;
