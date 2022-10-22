
var arr = [17,19,24,32,41,57,62,80];
var arr1 = [80,62,57,41,32,24,19,17];
var arr2 = [17,24,41,62,19,32,80,57];
var arreglo = [1, 2, 5, 8, 10, 11, 11, 16,30, 20, 80, 500, 500, 1000, 1002, 5000];

const found = arr.find(element => element >= 57);
const found1 = arr1.find(element => element < 57);
const found2 = arr2.find(element => element > 57);
const found3 = arreglo.find(element => element >= 500);

console.log("output metodo find");
console.log(found);
console.log(found1);
console.log(found2);
console.log(found3);

console.log("output metodo IndexOf");
console.log(arr.indexOf(80));
console.log(arr1.indexOf(80));
console.log(arr2.indexOf(80));
console.log(arreglo.indexOf(80));