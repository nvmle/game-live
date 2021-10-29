import React from "react";

const Square = ({ indexRow, indexColumn, onClick, board }) => {
  const getSquareClasses = (row, column) => {
    return board[row][column] === 1 ? "square fill" : "square";
  };
  const handleClick = () => {
    onClick(indexRow, indexColumn);
  };

  return (
    <div
      className={getSquareClasses(indexRow, indexColumn)}
      onClick={handleClick}
      key={indexRow + "_" + indexColumn}
    ></div>
  );
};

export default Square;
