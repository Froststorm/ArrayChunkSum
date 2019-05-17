let array = [-7, -1, 6,-10, -8, 5, -5, 4, 3,-2, 9, -2, 1, -9];
let arrLength = array.length + 1;
let arrSum = [];
let arrTemp = [];
let sum2 = 0;
let sumTemp = 0;


for (let index1 = 0; index1 < arrLength; index1++) {
	for (let index2 = 1; index2 < arrLength; index2++) {
		// console.log(`index1 is ${index1} index2 is ${index2} - slice : ${array.slice(index1, index2)}`);
		arrSum = array.slice(index1, index2);
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
