// Soal Nomor 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arrOfNum) {
  const reduce = (fn, acc, [cur, ...rest]) => (cur === undefined ? acc : reduce(fn, fn(acc, cur), rest));
  return reduce((a, b) => a + b, 0, arrOfNum);
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal Nomor 2

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  if (arr[0] > avg) {
    i = 1;
  }
  return i + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// soal nomor 3

const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, nilai) {
  if (arr[arr.length - 1] === nilai) {
    return "angka ditemukan pada index: " + (arr.length - 1);
  }
  if (arr.length === 1) {
    return "angka tidak ditemukan";
  }
  return searchInArray(arr.slice(0, -1), nilai);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// soal nomor 4

function trianglePattern(x, y) {
  if (x === 0) {
    return;
  }
  let tampungan = "";
  for (let i = 0; i < y; i++) {
    if (i < x - 1) {
      tampungan += " ";
    } else {
      tampungan += String.fromCharCode(64 + (y - x + (i - x) + 2));
    }
  }
  console.log(tampungan);
  trianglePattern(x - 1, y);
}

const first = 5;
const second = 3;
const third = 2;

console.log("FIRST >>>>>>>>>>>>>>>>>>>>>>>>>>");
trianglePattern(first, first);
console.log("SECOND >>>>>>>>>>>>>>>>>>>>>>>>>>");
trianglePattern(second, second);
console.log("THRID >>>>>>>>>>>>>>>>>>>>>>>>>>");
trianglePattern(third, third);
