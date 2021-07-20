// First of all we are splitting the line of string using split(" ") function, which will give us an array of splitted strings. Then i replaced array of strings with array of number 
// by repacing strings with their respective lengths using forEach function. simultaneously i founded the max in string.

function findLongestWordLength(str) {
  //Type your code here 
  var a = str.split(" ");

var max = 0;
a.forEach(function(data,index){
    a[index] = a[index].length; //Replacing array of string with array of number(length of respective strings).
    if(a[index]>max){
        max=a[index];
    }
})  
  return max;
}
