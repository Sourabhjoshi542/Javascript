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
console.log("Example of passing string to a function and use of return")
console.log(logginMessage("Sourabh"))

//Rest operator to pass multiple unknown values to a function like in a shopping cart 
//when the number of items addded to the cart is unkown
// rest operator

function calculateCartPrice(...num1)
{
    return num1;       // return all the passed value
}
console.log("Its the Example of Rest Operator")
console.log(calculateCartPrice(100,200,400,600))    

//passing objects to a function

const Item={
    name: "Apple",
    price: 200
}

function handleObjects(object)
{
  console.log(`Item name is ${object.name} and its price is ${object.price}`)
}
console.log("Its the example of passing a object to a function")
handleObjects(Item)


//passing Array to the function

const arr=[1,2,3,4,5]

function returnSecondElement(anyarray)
{
    return anyarray[1];
}

console.log(returnSecondElement(arr))