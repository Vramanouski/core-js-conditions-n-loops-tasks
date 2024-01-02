function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }

  if (queen.y === king.y) {
    return true;
  }

  const xDiff = queen.x - king.x > 0 ? queen.x - king.x : king.x - queen.x;
  const yDiff = queen.y - king.y > 0 ? queen.y - king.y : king.y - queen.y;

  if (xDiff === yDiff) {
    return true;
  }

  return false;
}

function isIsoscelesTriangle(a, b, c) {
  if (a + b < c || b + c < a || c + a < b || a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  return a === b || a === c || b === c;
}

function convertToRomanNumerals(num) {
  const beforeNine = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  const afterNine = ['', 'X', 'XX', 'XXX'];

  const secNum = num % 10;
  const firstNum = (num - secNum) / 10;

  return afterNine[firstNum] + beforeNine[secNum];
}

function convertNumberToString(numberStr) {
  let answer = '';
  let word = '';

  for (let i = 0; i <= numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;

      case '3':
        word = 'three';
        break;

      case '4':
        word = 'four';
        break;

      case '5':
        word = 'five';
        break;

      case '6':
        word = 'six';
        break;

      case '7':
        word = 'seven';
        break;

      case '8':
        word = 'eight';
        break;

      case '9':
        word = 'nine';
        break;

      case '.':
        word = 'point';
        break;
      case ',':
        word = 'point';
        break;

      case '-':
        word = 'minus';
        break;

      default:
        word = '';
    }

    answer += i < numberStr.length - 1 ? `${word} ` : word;
  }

  return answer;
}

function isPalindrome(str) {
  let ans = 1;
  let j = str.length - 1;

  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] !== str[j]) {
      ans = 0;
    }
    j -= 1;
  }
  return !!ans;
}

function getIndexOf(str, letter) {
  let answer = null;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      answer = i;
      break;
    }
  }

  if (answer || answer === 0) {
    return answer;
  }
  return -1;
}

function isContainNumber(test, digit) {
  let isRight = false;
  let num = test;
  while (num > 0) {
    if (num < 10) {
      if (num === digit) {
        isRight = true;
      }
      num = 0;
      break;
    }

    if (num % 10 === digit) {
      isRight = true;
      num = 0;
    } else {
      num = (num - (num % 10)) / 10;
    }
  }

  return isRight;
}

function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;

    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      right += arr[j];
    }

    if (left === right) {
      return i;
    }
  }

  return -1;
}

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        matrix[bottom][i] = num;
        num += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        matrix[i][left] = num;
        num += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
