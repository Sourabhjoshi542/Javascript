/*
// map which automatically return the value of array element
const myNums=[1,3,5,7,9,11,13,15]

const newNums=myNums.map( (num)=> num*10 )     
console.log(newNums)
*/
//chaining - Using multiple map,filters.

const val=[2,4,6,8,10,12]

let newVal=val
        .map( (num)=> num * 10 )
        .map( (num)=> num + 1 )
        .filter( (num)=> num > 40 )
        
console.log(newVal)


