//  ==============REDUCE METHOD ===================
//used to flaten an array i.e to convert the 3d or 2d array into a single dimentional array.

// The reduce() method executes a reducer function (that you provide) 
// on each ele of an Array, resulting in a single output value.

// The reducer function takes 4 arguments:

// Accumulator
// Current value
// Current index
// Source Array

// total sum, total product, percentage vgerah nikalne k liye use hota hai ye coze wo single value hoti hai na islye.

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curEle, index, arr)=>{
//     return accumulator+= curEle
// })
// console.log(sum);

// what if we wants to give some initial value?????
//  we can give that and it will get stored in accumulator.

// let sum = arr.reduce((accumulator, curEle, index, arr)=>{
//     return accumulator+= curEle
// }, 7) // now accumulator will have 7 already or we can say that accumulator has been initilised with 7.
// console.log(sum);


//How to Flatten an Array:
// const arr = [
//                 ['zone_1', 'zone_2'],
//                 ['zone_3', 'zone_4'],
//                 ['zone_5', 'zone_6'],
//                 ['zone_7', 'zone_8'],
//             ]

// let flatArr = arr.reduce((accum, currVal)=> {
//     return accum.concat(currVal);
// })

// console.log(flatArr);

//WITH THE UPDATE OF ECMASCRIPT-2020 WE HAVE ANOTHER WAY OF FLATTENING AN ARRAY 
// WITHOUT USING REDUCE FUNCTION
