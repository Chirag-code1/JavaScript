// Given an array, you have to print the LEADER elements of it.
// An element is called LEADER if it is greater than all the elements to its right side,
//IMPORTANT->   note that the rightmost element is always a leader.

// For example in the array {12, 27, 14, 11, 25, 6, 7}, leaders are 27, 25 and 7.



function findTheLeaders(arr, N ){
  // Write your code here
  
  var max=0;
var ans= [];

for(var i=N-1;i>=0;i--){
    if(arr[i]>=max){
        max = arr[i];
        // console.log(max)
       ans.unshift(max);
    }
}
  return ans;
}
