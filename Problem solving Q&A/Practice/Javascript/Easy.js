function countOccurrences(arr, n, x) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) res++;
  }
  return res;
}

arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let n = arr.length;
let x = 2;
document.write(countOccurrences(arr, n, x)); //
//
let num = 12345;
function reverseDigits(num) {
  let rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num;
}
document.write(reverseDigits(num)); //

let Array = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let = Array.length;

insertionSort(Array, n);
printArray(Array, n);
