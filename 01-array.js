
// Soal Nomor 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(Array) {
    let number = [...Array].reverse()
    return number;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//Soal Nomor 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];
const initialArrayValue = 0;
function getAverage(arrayOfNumber) {
    const sumWithInitialArray = arrayOfNumber.reduce ((pa, ca) => pa + ca);
    const average = sumWithInitialArray / arrayOfNumber.length;
    const aboveAverage = arrayOfNumber.filter((value) => value > average); 
    return aboveAverage.length;
}

console.log(getAverage(arr1))
console.log(getAverage(arr3))


//Soal Nomor 3
const arr4 = [ [10], [9, 7, 1], [2, 8] ];
  
  function searchInArray( arr4, num1 ) {
      const combineArr = arr4.join().split(',').map ((value) => Number(value));

      const index = combineArr.indexOf(num1);

      if (index < 0){
          return null;
      } else{
          return index;
      }
    }
  
  console.log(searchInArray(arr4, 3));
  console.log(searchInArray(arr4, 2));
  console.log(searchInArray(arr4, 4));
  console.log(searchInArray(arr4, 8));

