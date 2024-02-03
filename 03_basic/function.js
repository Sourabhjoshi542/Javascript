/* function definition and parameters

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

addTwoNumber(3,7)  function calling and passing arguements */

/*2 function addNumber(number1,number2)
{
    let sum=number1+number2;
    return sum;
    console.log("this will not executed");  //do not execute after return
} 
 
let result=addNumber(5,4);
console.log(result); */

function logginMessage(username)
{
   if(!username)
   {
    console.log("please enter the username");
    return
   }
   return `${username} just logged in`;
}

console.log(logginMessage("Sourabh"))