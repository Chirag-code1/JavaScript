//Array.prototype.pop()
// it removes the last ele from an array and returns the ele. 
// This method changes the length of an Array
// EXAMPLE:
// const flowers=['rose', 'lily', 'jasmine', 'dogflower']
// console.log(flowers.pop()); op=>dogflower
// console.log(flowers);

//Array.prototype.shift()
//it removes the ele from beginning of an array and returns the removes element.
// it changes the length of an array.
// const flowers=['rose', 'lily', 'jasmine', 'dogflower']
// console.log(flowers.shift()); OP=> Rose
// console.log(flowers);


// CHALLENGE TIME:
//Arrya.prototype.splice()
//  Adds and/or removes elements from an Array.

// CRUD Tasks to do just by using one method i.e splice():
// 1. Add Dec to end of n Array.
// 2. What is the return value of splice method.
// 3. Update march to March.
// 4. Delete June from Array.
// const months=['Jan', 'march', 'April', 'June', 'July'];

// sol1:
// const newMonth = months.splice(index, wanna delete that index?, what u wanna add);
// const newMonth = months.splice(5, 0, 'Dec');
//OR
// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);

//Sol2:
// console.log(newMonth);
//  it returns the array of data deleted by it,
//  which is [] rn, coze we haven't deleted anything yet.

//Sol3:
// const updateMarch = months.splice(1,1,'March');
// console.log(months);

//OR, if we don't know the index number of ele to be update, we can find it first.
//indexOf() method returns -1 if that ele idn't found and index of that ele if it's found.

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMarch = months.splice(indexOfMonth,1,'March');
// } else {
//     console.log('No such data found!');
// }

// console.log(months);

//Sol4:
// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     // var updateMonth = months.splice(indexOfMonth,kitne elements delete krne hai uss index ke baad?);
//     var updateMonth = months.splice(indexOfMonth,1);
// } else {
//     console.log('No such data found!');
// }

// console.log(months);
// console.log(updateMonth);

// =============MAP Method==================
// it returns new Array without mutating original array.
//Syntax:
//  let newArr = arr[callback(currentElement, index, array we are working on){
//     // returns the new array containing the results of calling a function on each ele of arr.
// }]

// const arr=[1,4,9,16,25];

// let newArray = arr.map((curEle, index, arr) => {
//         return curEle> 9;
// })
// console.log(arr); OP=>[ 1, 4, 9, 16, 25 ]
// console.log(newArray); OP=>[ false, false, false, true, true ]

// let newArray = arr.map((curEle, index, arr)=>{
//     return `index ${index} has value of ${curEle} in array of ${arr} `
// })
//  console.log(newArray);

//  let newArrayfor = arr.forEach((curEle, index, arr)=>{
//     return `index ${index} has value of ${curEle} in array of ${arr} `
// })
//  console.log(newArrayfor); //undefined. coze it mutates the original array without giving new array.
