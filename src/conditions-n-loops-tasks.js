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

function rotateMatrix(test) {
  const matrix = test;

  const n = matrix.length;
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }

  return matrix;
}

function sortByAsc(arr) {
  const myArray = arr;
  function makeHeap(size, rootIndex) {
    let biggest = rootIndex;
    const leftKid = 2 * rootIndex + 1;
    const rightKid = 2 * rootIndex + 2;

    if (leftKid < size && myArray[rootIndex] < myArray[leftKid]) {
      biggest = leftKid;
    }

    if (rightKid < size && myArray[biggest] < myArray[rightKid]) {
      biggest = rightKid;
    }

    if (biggest !== rootIndex) {
      const temp = myArray[rootIndex];
      myArray[rootIndex] = myArray[biggest];
      myArray[biggest] = temp;

      makeHeap(size, biggest);
    }
  }

  const totalElements = myArray.length;

  for (let i = Math.floor(totalElements / 2) - 1; i >= 0; i -= 1) {
    makeHeap(totalElements, i);
  }

  for (let i = totalElements - 1; i > 0; i -= 1) {
    const temp = myArray[0];
    myArray[0] = myArray[i];
    myArray[i] = temp;

    makeHeap(i, 0);
  }

  return myArray;
}

function shuffleChar(string, iterations) {
  const str = string;
  const len = str.length;
  const newPositions = new Array(len);

  for (let i = 0; i < len; i += 1) {
    let pos = i;
    for (let iter = 0; iter < iterations; iter += 1) {
      pos = pos % 2 === 0 ? pos / 2 : (len + pos - 1) / 2;
    }
    newPositions[pos] = i;
  }

  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += str[newPositions[i]];
  }

  return result;
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
