// var n=28;
// for( var i=2;i<n;i++)
// {
//     if(n%i==0)
//     {
//         console.log(n+" not a prime number")
//         break;
//     }
//     // else{
//     //     console.log(n+" is a prime number")
//     //     break;
//     // }
// }
 //function
 function checkPrime(n)
 {
     for(var i=2;i<n-1;i++)
     {
         if(n%i==0)
         {
             return n+" is not a prime number";
         }
        //  else{
        //      return n+" is a prime number";
        //  }
     }
     return n+" is a prime number"
 }
 var prime=checkPrime(77)
 console.log(prime)