# ArrayChunkSum
##Largest subarray problem
 `The input is an array of numbers· e¸g¸ arr [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9]
   Your task is to find the contiguous subarray of arr with the maximal sum of numbers
  write the function that will find and return that sum`
 
```$JavaScript
/*Largest subarray problem
* The input is an array of numbers· e¸g¸ arr [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9]
* Your task is to find the contiguous subarray of arr with the maximal sum of numbers
* write the function that will find and return that sum
* */


let array = [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9];
let arrLength = array.length + 1;
let arrSum = [];
let arrTemp = [];
let sum2 = 0;
let sumTemp = 0;


for (let indexStart = 0; indexStart < arrLength; indexStart++) {
	for (let indexEnd = 1; indexEnd < arrLength; indexEnd++) {
		// console.log(`indexStart is ${indexStart} indexEnd is ${indexEnd} - slice : ${array.slice(indexStart, indexEnd)}`);
		arrSum = array.slice(indexStart, indexEnd);
		sumTemp = arrSum.reduce((akk, val) => akk + val, 0);
		// console.log(sumTemp);
		if (sumTemp > sum2) {
			sum2 = sumTemp;
			arrTemp = arrSum;
		}
	}

}
console.log(sum2);

console.log(arrTemp);

```
