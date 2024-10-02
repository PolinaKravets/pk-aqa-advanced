// Write a function that given, an array arr, returns an array containing at each index i the amount of
// numbers that are smaller than arr[i] to the right.

function smaller(nums) {
  //code me
  let result = new Array(nums);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
}

let array = [5, 4, 3, 2, 1];
console.log(smaller(array));

function modifyDiagonal(matrix) {
  // Перебираємо головну діагональ масиву
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] < 0) {
      matrix[i][i] = 0; // Якщо елемент негативний, замінюємо на 0
    } else {
      matrix[i][i] = 1; // Якщо елемент не є негативним, замінюємо на 1
    }
  }
  return matrix;
}
let squareArray = [
  [4, 2, 3],
  [-1, 5, 6],
  [7, 8, -9],
];

console.log(modifyDiagonal(squareArray));
