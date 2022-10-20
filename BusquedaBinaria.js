var arr = [17,19,24,32,41,57,62,80];
var arr1 = [80,62,57,41,32,24,19,17];
var arr2 = [17,24,41,62,19,32,80,57];
var arreglo = [1, 2, 5, 8, 10, 11, 11, 16,30, 20, 80, 500, 500, 1000, 1002, 5000];

// Recibe un array y el elemento a Buscar. Devolverá el arreglo  si en caso
function binarySearch(value, array) {
    let first = 0;    //left endpoint
    let last = array.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (array[middle] == value) {
            found = true;
            position = middle;
        } else if (array[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}
console.log("output arreglo");
console.log(binarySearch(80,arreglo));







