//foreach loop - mostly used loop in arrays
//callback function - function that do not have the name used inside foreach loop
//NOTE- foreach loop does not return any value

const arr=["car","bike","ships"]

// arr.forEach( function (item){       //1st method -callback function
//    console.log(item)
// } )

// arr.forEach((item) => {       //arrow function
//    console.log(item)
// } )

function show(item)
{
    console.log(item)
}

arr.forEach(show)   //passing simple function referenece


let arrayOfObject=[{
    name:"Sourabh",
    age:24  },
{
name:"Soniya",
age:21 },
{
name:"harshita",
age:21 }]


arrayOfObject.forEach( (item)=>{
    console.log(item.name)
} )
