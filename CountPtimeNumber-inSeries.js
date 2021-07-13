//Task 1: Write a program to find, if the count of prime numbers in a series from 2 to n. [2, n]

//Input Format: A single integer (n). 2 < n <= 100

//Output Format: number. Assign the result to variable named primeCount.


function primeCount(input) {
	let primeCount;
   var i, j, flag, count=0;
    if(input>=2 && input<=100) 
    {
    for(i=2; i<=input; i++){
        flag=0;
        for(j=2;j<=i/2;j++){
            if(i%j==0)
            {
                flag=1;
                break;
            }
        }
            if(flag==0 && i>=2){
                count++; 
            }
        }
      primeCount = count;
      //printf("\nTotal number of Prime-Numbers from 2 to %d are:\t%d",input,  count);
    }
	return primeCount;
}
