/*Largest subarray problem
* The input is an array of numbers· e¸g¸ arr [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9]
* Your task is to find the contiguous subarray of arr with the maximal sum of numbers
* write the function that will find and return that sum
* */


let array = [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9];
let arrLength = array.length + 1;
let arrSub = [];
let arrTemp = [];
let sum2 = 0;
let sumTemp = 0;


for (let index1 = 0; index1 < arrLength; index1++) {
	for (let index2 = 0; index2 < arrLength; index2++) {
		// console.log(`index1 is ${index1} index2 is ${index2} - slice : ${array.slice(index1, index2)}`);
		arrSub = array.slice(index1, index2);
		sumTemp = arrSub.reduce((akk, val) => akk + val, 0);
		// console.log(sumTemp);
		if (sumTemp > sum2) {
			sum2 = sumTemp;
			arrTemp = arrSub;
		}
	}

}
console.log(sum2);

console.log(arrTemp);
