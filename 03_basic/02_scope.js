
/*
if(true)
{
    let a=10
    const b=30
    var c=30
}

console.log(a)
console.log(b)
console.log(c) //it is printes as 30 but print honi nhi chahiye kyuki c inside the if declare hai.



let a=100

if(true)
{
    let a=10
    console.log("inner a",a)
}

console.log("outer a",a)     both a are different because of they are declare inside different blocks



*/


function one()
{
    const userName="Sourabh"
        function two()
        { 
          const couse="javascript"
          console.log(`the user of this course is ${userName}`)
        } 

    two()                   // nested function  
   // console.log(course)  //outside the scope or block not executed
}

one()





console.log(addOne(5))  // it will execute 

function addOne(num)   //basic function
{
    return num+1
}


//console.log(addTwo(5)) not execute because it is writtten before declaration of the expression

const addTwo=function (num)    // called Expression but its basically a function 
{
    return num+2
}

console.log(addTwo(5))

