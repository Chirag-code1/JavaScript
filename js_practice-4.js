//--------------------------------ARRAYS-----------------------------------------------------

var myFriends=["chirag", 19, "male", "true"]; //just writing square brackets is enough to tell js that you r using array.
var bestFriend=["Shnaya", 19, "female", "false"];

//Traversing an Array:

for(let i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}

for(let i=0;i<bestFriend.length;i++){
    console.log(bestFriend[i]);
}
// Finding length of an array: array_name.length; 
// and this is not a fuction coze it doesnt have (). Rather it is a property.

// ________________using with  template literals______________________
for(let i=0;i<bestFriend.length;i++){
    console.log(`${myFriends[i]} and ${bestFriend[i]}`);
}

// for-in loop =/> returns the index of elements of array

for(elements in myFriends){
       console.log(elements);
}
//output==> 
// 0
// 1
// 2
// 3

