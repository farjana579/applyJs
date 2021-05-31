//for loop
var n=10;
var factorial=1;
for(var i=1;i<=n;i++)
{
    factorial=factorial*i;
}
console.log(factorial)
//function
function Calfactorial(n)
{
    var fact=1;
    for(var i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
var result= Calfactorial(20);
console.log(result)
  //while with function
  function calculateFactorial(n)
  {
    var i=1;
    var fact=1;
    while(i<=n)
    {
        fact=fact*i;
        i++;
    }
    return fact
  }
  var count=calculateFactorial(12)
  console.log(count)
  //recusive way
  //n!=(n-1)!*n;
  function recurFactorial(n)
  {
      if(n==0)
      {
        return 1;
      }
      else{
          return n*recurFactorial(n-1);
      }
  }
  var result=recurFactorial(15)
  console.log(result)