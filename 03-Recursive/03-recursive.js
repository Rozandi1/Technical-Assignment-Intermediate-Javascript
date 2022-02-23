// Soal Nomor 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray( arrOfNum ) {
    const reduce = (fn, acc, [cur, ...rest]) => (
        cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
      );
      return (reduce((a, b) => a + b, 0, arrOfNum));   
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


// Soal Nomor 2
const avg1 = 0;
const avg2 = 0;
function countAboveAvg( arr, avg ) {
    const avgOfNum = sumOfArray / arr.length;
    if (avg === 1){
        return arr;
    } else {
        return avgOfNum.filter((arr) => arr > avgOfNum);
    }
 }

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);