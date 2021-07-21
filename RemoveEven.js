//Task 1: Write a program to remove all even numbers from an array.

//Input Format: An array of size n.

//Output Format: Return an array containing only odd numbers. If none return an empty array.

//Solution:

function removeEven(input) {
  let ans = input.filter(function(value,index){
    if(value%2!=0){
      return value;
    }
  })
  return ans;
}
