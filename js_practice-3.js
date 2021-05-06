//----------------------------------------------------------FUNCTIONS:-----------------------------------
// var a=3, b=2;
// function sum(a,b){
//     console.log(a+b);
// }
// sum(3,2);

//MODERN JAVASCRIPT:::

// var vs. let vs. const.

// var-> function scope
// let/ const -> block scope.

// const myName="chirag";
// // console.log(myName); //Chirag
// myName="chigz";
// console.log(myName); //error: coze value of 'const' cannot be changed once declared.

// function biodata(){
//     var myFirstName= "chirag";
//     console.log(myFirstName); //op-> chirag

//     if(true){
//         let myLastName="Arora";
//         console.log(myLastName); //op-> arora
//         console.log(myFirstName); //op-> chirag
//     }

//     console.log(myLastName); //error: coze scope of let is limited to block.
// }

// // console.log(myFirstName); //error: coze scope of let is limited to function.

// biodata();

//---- Template literals/Strings. 
// => it says use back tick i.e (``)

// example:-

// for(let i=1;i<=10;i++){
//     let tableOf=12;
//     // console.log(tableOf+" * "+i+ "= "+(tableOf*i));
//     // Above expression will peint table of 12.

//     // if we use template literals the the above expression will be much more Simple. i.e,

//      console.log(` ${tableOf} * ${i} = ${tableOf*i} `);
//     // Above expression will also print table of 12.

// }

//------------------------------------------Default Arguments----------------------------------------:

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(2,3));

// but, if we pass just one argument rather than two, then it will throw 'NaN' error.

// example:

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(2)); //Nan

// Therefore we pass some default value to the parameter and that is known as Default Argument.

// function mult(a,b=2){
//     return a*b;
// }
// console.log(mult(2));


//---------------FAT ARROW FUNCION
// Difference between TRADITIONAL & FAT ARROW FUNCTION IS AS FOLLOW:
// 1. WRITING FORMAT. 
// 2. We can call a function before even declaring it in Fat Arrow Function, unlike Tradiotional function.

// const sum=()=>{
//     let a=2; let b=3;
//     return `Sum of two numbers, ${a} and ${b} is ${a+b}`;
// }

// console.log(sum());