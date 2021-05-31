// fibo[2]=fibo[1]+fibo[0]=fibo[2-1]+fibo[2-2];
// fbo[3]=fibo[3-1]+fibo[3-2];
// fibo[4]=fibo[4-1]+fibo[4-2]
// fibo[n]=fibo[n-1]+fibo[n-2]
// fibo[i]=fibo[i-1]+fibo[i-2]



var fibo=[0,1];
for(var i=2;i<=15;i++)
{
fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo)

//function
function fibonac(n)
{
     var fibo=[0,1]
    for(var i=2;i<=n;i++)
{
fibo[i]=fibo[i-1]+fibo[i-2];
}
  return fibo;
}
var fibon=fibonac(10)
console.log(fibon)

//recursive way

function fibonacci(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n == 1)
    {
        return 1;
    }
    else{
       return fibonacci(n-1)+fibonacci(n-2);
    }
}
var sum=fibonacci(20);
console.log(sum)