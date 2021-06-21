//CHALLENGE TIME:

// Ques1: Find the sq root of each of the ele of given array.
//  let arr = [25, 36, 49, 64, 81];

//  let newArray1 = arr.map((curEle, index, arr)=>{
//      return Math.sqrt(curEle);
//  })
//  console.log(arr);
//  console.log(newArray1);


//  Ques2: Multiply each tem by 2 and returns the value greater than 10.

//   let arr = [2, 3, 4, 6, 8];
//   let newArray = arr.map((curEle)=> {
//     return curEle*2;
//  }).filter((curEle)=> {
//        return  curEle>10;
//  })
//  console.log(newArray);

// let newArray = arr.map((curEle)=> curEle*2).filter((curEle)=> curEle>10)
//  console.log(newArray);

// OR, if we use reduce() function to get the sum of values greater than 10, we can use the below function.

//  let newArray = arr.map((curEle)=> curEle*2).filter((curEle)=> curEle>10).reduce((accumulator, curEle)=> accumulator+= curEle)
//   console.log(newArray);
