//1.Addition//
function addition(a, b) {
    return a + b;
  }
  console.log(addition(5, 8));
  
  //substraction//
  function sub(a, b) {
    return a - b;
  }
  console.log(sub(15, 9));
  //2.converts into minutes to seconds//
  function converts(minutes) {
    return minutes * 60;
  }
  console.log(converts(60));
  //3.increment//
//   var mynumber = 1;
//   console.log(mynumber++);
//   console.log(mynumber);
//   console.log(mynumber + 1);
//   console.log(mynumber + 2);
//   console.log(mynumber + 3);

function addOne(num){
    return 1+num;
}
console.log(addOne(2));
  //5.voltage and current//
  function circuitpower(voltage, current) {
    return voltage * current;
  }
  console.log(circuitpower(100, 50));

  //7.//
  function isTenorSumTen(a,b){
    return a===10||b===10||a+b===10;
  }
  console.log(isTenorSumTen(5,5));

  //8.//
  function stringCount(str1,str2){
    return str1.length===str2.length;
    
  }
  let res=stringCount("AB","bc");
  console.log(res);
  
  //9.//
  function greetings(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greetings('Hari'); 

  //11.//
  function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length);
    return arr;
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"])); 

//12.//
// let x = ([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

// function find(x){
//     let y = [0,0,0]
//     for(i=0;i<x.length;i++){
//         for(j=0;j<x[i].length;j++){
//             if(x[i][j]>y[i]){
//              y[i] = x[i][j]
//             }
//         }
//     }
//     return y
// }
// console.log(find(x))

//13//finding  second largest number//

let x = [23,12,4,56,76,88]
function find(x){
    let first = 0;
    let second =0;
    for(i=0;i<x.length;i++){
        if(x[i]>first){
            second = first;
            first = x[i];
        }else(x[i]>second && x[i]!==first)
    }
    return second
}
console.log(find(x));


