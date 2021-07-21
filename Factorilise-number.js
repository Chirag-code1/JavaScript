function factorialize(num) {
  //Type your code here
  var res=1;
	if(num == 0)
	return 1;

	for(let i=num; i>1; i--)
    {
    res = res*i;
	}
	return res;
  
}
