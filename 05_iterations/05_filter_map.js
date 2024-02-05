//since by using foreach loop we cannot return the value of the array
//so we use filter

const myNums=[1,3,5,7,9,11,13,15]

/* const val=myNums.forEach( (item)=>{  //cannot return any value
    return item
} )
console.log(val)   //undefined
*/

//const newNums=myNums.filter( (num)=>num>5 )     // returns value implicit return
//console.log(newNums)                   

const newNums=myNums.filter( (num)=>{           // explicit return
    return num>5                                //here we can write the condition to obtain the array element                                 
} )                                          
console.log(newNums)

const book=[{
      title:"book1",
      edition:1996,
      genre:"history"
},
{
    title:"book2",
    edition:1986,
    genre:"friction"
},
{
    title:"book3",
    edition:2000,
    genre:"history"
},
{
    title:"book4",
    edition:2012,
    genre:"friction"
}
]

let bookdet=book.filter( (bk)=> {                                         
    return bk.edition>=2000 && bk.genre==="friction"    // conditions 
})

console.log(bookdet)



