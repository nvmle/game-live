export const matrix = (rows, cols, defaultValue = 0) => {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    arr[i].push(new Array(cols));
    for (let j = 0; j < cols; j++) {
      arr[i][j] = defaultValue;
    }
  }

  return arr;
};
