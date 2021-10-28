import React, { useState, useEffect } from "react";
import GameField from "./gameField";

const Board = () => {
  const [play, setPlay] = useState(0);

  // let play = 0;

  const start = () => {
    console.log("start");

    // play ? (play = 0) : (play = 1);

    play ? setPlay(0) : setPlay(1);
  };

  return (
    <div className="container">
      <button onClick={() => start()}>Start</button>
      <GameField play={play} />
    </div>
  );
};

export default Board;

// const Board = () => {
//   const [board, setBoard] = useState(); // useState(() => matrix(ROWS, COLUMNS, 0));
//   let play = 0;
//   useEffect(() => {
//     setBoard(matrix(ROWS, COLUMNS, 0));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // console.log("useEffect");
//       // console.log("play", play);

//       if (play) {
//         console.log("refresh");
//         console.log("play", play);

//         const newState = [];

//         for (let i = 0; i < board.length; i++) {
//           newState.push([]);
//           newState[i].push(new Array(board[i].length));
//           for (let j = 0; j < board[i].length; j++) {
//             newState[i][j] = board[i][j];
//           }
//         }

//         board.forEach((row, indexRow) => {
//           row.forEach((square, indexColumn) => {
//             let nearbyLiving = 0;

//             if (
//               indexRow &&
//               indexColumn &&
//               board[indexRow - 1][indexColumn - 1]
//             ) {
//               nearbyLiving++;
//             }
//             if (indexRow && board[indexRow - 1][indexColumn]) {
//               nearbyLiving++;
//             }
//             if (
//               indexRow &&
//               indexColumn !== row.length - 1 &&
//               board[indexRow - 1][indexColumn + 1]
//             ) {
//               nearbyLiving++;
//             }
//             if (indexColumn && board[indexRow][indexColumn - 1]) {
//               nearbyLiving++;
//             }
//             if (
//               indexColumn !== row.length - 1 &&
//               board[indexRow][indexColumn + 1]
//             ) {
//               nearbyLiving++;
//             }
//             if (
//               indexRow !== board.length - 1 &&
//               indexColumn &&
//               board[indexRow + 1][indexColumn - 1]
//             ) {
//               nearbyLiving++;
//             }
//             if (
//               indexRow !== board.length - 1 &&
//               board[indexRow + 1][indexColumn]
//             ) {
//               nearbyLiving++;
//             }
//             if (
//               indexRow !== board.length - 1 &&
//               indexColumn !== row.length - 1 &&
//               board[indexRow + 1][indexColumn + 1]
//             ) {
//               nearbyLiving++;
//             }

//             if (nearbyLiving < 2 || nearbyLiving > 3) {
//               if (square) {
//                 newState[indexRow][indexColumn] = 0;
//               }
//             }

//             if (nearbyLiving === 3) {
//               if (!square) {
//                 newState[indexRow][indexColumn] = 1;
//               }
//             }
//           });
//         });

//         setBoard(newState);
//       }
//     }, 500);
//     return () => clearInterval(interval);
//   });

//   const handleClick = (indexRow, indexColumn) => {
//     const newState = [];

//     for (let i = 0; i < board.length; i++) {
//       newState.push([]);
//       newState[i].push(new Array(board[i].length));
//       for (let j = 0; j < board[i].length; j++) {
//         newState[i][j] = board[i][j];
//       }
//     }
//     board[indexRow][indexColumn] === 0
//       ? (newState[indexRow][indexColumn] = 1)
//       : (newState[indexRow][indexColumn] = 0);

//     setBoard(newState);
//   };

//   const start = () => {
//     console.log("start");

//     play ? (play = 0) : (play = 1);
//     // const newState = [];
//     // for (let i = 0; i < board.length; i++) {
//     //   newState.push([]);
//     //   newState[i].push(new Array(board[i].length));
//     //   for (let j = 0; j < board[i].length; j++) {
//     //     newState[i][j] = board[i][j];
//     //   }
//     // }
//     // board.forEach((row, indexRow) => {
//     //   row.forEach((square, indexColumn) => {
//     //     let nearbyLiving = 0;
//     //     if (indexRow && indexColumn && board[indexRow - 1][indexColumn - 1]) {
//     //       nearbyLiving++;
//     //     }
//     //     if (indexRow && board[indexRow - 1][indexColumn]) {
//     //       nearbyLiving++;
//     //     }
//     //     if (
//     //       indexRow &&
//     //       indexColumn !== row.length - 1 &&
//     //       board[indexRow - 1][indexColumn + 1]
//     //     ) {
//     //       nearbyLiving++;
//     //     }
//     //     if (indexColumn && board[indexRow][indexColumn - 1]) {
//     //       nearbyLiving++;
//     //     }
//     //     if (
//     //       indexColumn !== row.length - 1 &&
//     //       board[indexRow][indexColumn + 1]
//     //     ) {
//     //       nearbyLiving++;
//     //     }
//     //     if (
//     //       indexRow !== board.length - 1 &&
//     //       indexColumn &&
//     //       board[indexRow + 1][indexColumn - 1]
//     //     ) {
//     //       nearbyLiving++;
//     //     }
//     //     if (indexRow !== board.length - 1 && board[indexRow + 1][indexColumn]) {
//     //       nearbyLiving++;
//     //     }
//     //     if (
//     //       indexRow !== board.length - 1 &&
//     //       indexColumn !== row.length - 1 &&
//     //       board[indexRow + 1][indexColumn + 1]
//     //     ) {
//     //       nearbyLiving++;
//     //     }
//     //     if (nearbyLiving < 2 || nearbyLiving > 3) {
//     //       if (square) {
//     //         newState[indexRow][indexColumn] = 0;
//     //       }
//     //     }
//     //     if (nearbyLiving === 3) {
//     //       if (!square) {
//     //         newState[indexRow][indexColumn] = 1;
//     //       }
//     //     }
//     //   });
//     // });
//     // setBoard(newState);
//   };

//   return (
//     <div className="container">
//       <button onClick={() => start()}>Start</button>
//       {board
//         ? board.map((row, indexRow) => {
//             return (
//               <div className="row" key={indexRow}>
//                 {row.map((item, indexColumn) => {
//                   return (
//                     <Square
//                       indexRow={indexRow}
//                       indexColumn={indexColumn}
//                       onClick={handleClick}
//                       board={board}
//                     />
//                   );
//                 })}
//               </div>
//             );
//           })
//         : "Loading.. "}
//     </div>
//   );
// };

// export default Board;
