
var arregloAl = [1, 2, 5, 8, 10, 11, 11, 316, 20, 800, 500, 500, 1000, 1002, 5000];
var arr = [17,19,24,32,41,57,62];
var arr1 = [62,57,41,32,24,19,17];
var arr2 = [17,24,41,62,19,32,57];


// Devolverá el índice donde encontró  al elemento. Recibe el valor a buscar y el arreglo donde buscará
function sequentialSearch(element, array){
  for (var i in array){
    if (array[i] == element) return i; 
  }
  return -1;
}

console.log("output arregloAl");
console.log(sequentialSearch(5000,arregloAl));

