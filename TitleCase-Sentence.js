//TitleCase a Sentence:

function titleCase(str) {
str = str.toLowerCase().split(" ");
  for(let i=0;i<str.length;i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

//slice() =>The slice() method returns a shallow copy of 
//a portion of an array into a new array object selected 
//from start to end (end not included) where start and end
//represent the index of items in that array. The original array 
//will not be modified.
