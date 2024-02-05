//const username="Sourabh"   // if username=""  then it is false
//if(username)
//{
    //console.log("true value")
//}


//false values
// false, 0, "", BigInt 0n, NaN, null , undefined

// else  are true like "0", 'false' , " ", [],{}, function(){} 

//{}  =  object

const arr=[]
if(arr.length===0)
{
    console.log("empty array")
}



const obj={}

if(Object.keys(obj).length===0)   //object into array using key 
{
    console.log("empty object")  //check when the object is empty is true
}


// comparsions
// false=='' ||  false==0 || 0==''
//all are true

//nullish coalescing operator (??) works with null and undefined

let num1=5??10
let num=null??10

console.log(num1)
console.log(num)


//ternary operator short of if else
// condition ? true:false
const a=10

a>50 ? console.log("greate") : console.log("smaller")