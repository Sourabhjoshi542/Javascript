/*
const user={
    username:"Sourabh",
    price:999,

    welcomeMessage:function()
    {
     console.log(`${this.username}, Welcome to the website`)     //this only works with the objects
     console.log(this)
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
console.log(this)



function any()
{
    let username="sourabh"
    console.log(this.username)      // this doesnot work with the functions
}
any()




//arroy function  ()=>  

const addTwo = (num1,num2) =>       //regular arrow function
{
    return num1+num2                 //explicit return in which we have to write the return keyword and { } is used.
}

console.log(addTwo(5,4))

*/
// const addTwo =(num1,num2) => num1+num2        //both syntax valid
 const addTwo =(num1,num2) => (num1+num2)        //arrow function with implicit return

console.log(addTwo(5,4))

// to return a object in implicit arrow function

// const funcName =(parameter) => ({username:"Sourabh"})  //returning the object in the arrow function



