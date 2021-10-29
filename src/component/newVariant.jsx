import React, { useState, useEffect } from "react";
import Square from "./square";
import { matrix } from "../utils/matrix";

const ROWS = 50;
const COLUMNS = 50;

const GameField = ({ play }) => {
  const [board, setBoard] = useState();
  useEffect(() => {
    setBoard(matrix(ROWS, COLUMNS, 0));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (play) {
        const newState = [];

        for (let i = 0; i < board.length; i++) {
          newState.push([]);
          newState[i].push(new Array(board[i].length));
          for (let j = 0; j < board[i].length; j++) {
            newState[i][j] = board[i][j];
          }
        }

        board.forEach((row, indexRow) => {
          row.forEach((square, indexColumn) => {
            let nearbyLiving = 0;

            if (
              indexRow &&
              indexColumn &&
              board[indexRow - 1][indexColumn - 1]
            ) {
              nearbyLiving++;
            }
            if (indexRow && board[indexRow - 1][indexColumn]) {
              nearbyLiving++;
            }
            if (
              indexRow &&
              indexColumn !== row.length - 1 &&
              board[indexRow - 1][indexColumn + 1]
            ) {
              nearbyLiving++;
            }
            if (indexColumn && board[indexRow][indexColumn - 1]) {
              nearbyLiving++;
            }
            if (
              indexColumn !== row.length - 1 &&
              board[indexRow][indexColumn + 1]
            ) {
              nearbyLiving++;
            }
            if (
              indexRow !== board.length - 1 &&
              indexColumn &&
              board[indexRow + 1][indexColumn - 1]
            ) {
              nearbyLiving++;
            }
            if (
              indexRow !== board.length - 1 &&
              board[indexRow + 1][indexColumn]
            ) {
              nearbyLiving++;
            }
            if (
              indexRow !== board.length - 1 &&
              indexColumn !== row.length - 1 &&
              board[indexRow + 1][indexColumn + 1]
            ) {
              nearbyLiving++;
            }

            if (nearbyLiving < 2 || nearbyLiving > 3) {
              if (square) {
                newState[indexRow][indexColumn] = 0;
              }
            }

            if (nearbyLiving === 3) {
              if (!square) {
                newState[indexRow][indexColumn] = 1;
              }
            }
          });
        });

        setBoard(newState);
      }
    }, 100);
    return () => clearInterval(interval);
  });

  const handleClick = (indexRow, indexColumn) => {
    const newState = [];

    for (let i = 0; i < board.length; i++) {
      newState.push([]);
      newState[i].push(new Array(board[i].length));
      for (let j = 0; j < board[i].length; j++) {
        newState[i][j] = board[i][j];
      }
    }
    board[indexRow][indexColumn] === 0
      ? (newState[indexRow][indexColumn] = 1)
      : (newState[indexRow][indexColumn] = 0);

    setBoard(newState);
  };

  return (
    <div className="container">
      {board
        ? board.map((row, indexRow) => {
            return (
              <div className="row" key={indexRow}>
                {row.map((item, indexColumn) => {
                  return (
                    <Square
                      indexRow={indexRow}
                      indexColumn={indexColumn}
                      onClick={handleClick}
                      board={board}
                    />
                  );
                })}
              </div>
            );
          })
        : "Loading.. "}
    </div>
  );
};

export default GameField;
