function isUniqueChars(str){

  	let i, j;
for(i= 0 ; i<str.length; i++){
    // console.log("Value-"+i);
    for(j = i+1; j<str.length; j++){
        if(str[i] === str[j])
        {
            return false;
        }
    }
}
