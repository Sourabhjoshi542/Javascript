const mynum=[1,2,3]

/*  using simple function inside reduce
let tnum=mynum.reduce( function (acc,currval) {
    console.log(`${acc} accumulator , ${currval} current value `)
    return acc+currval         // 0 + 1 + 2 + 3
}, 0)                         // initial value in acc

console.log(tnum)

*/

let totalnum=mynum.reduce( (acc,currval)=> acc+currval , 0)
console.log(totalnum)




const course=[
    {
        itemName:"Javascript",
        price: 599  
      },
      {
        itemName:"CPP",
        price: 499  
      },
      {
        itemName:"typescript",
        price: 899  
      },
      {
        itemName:"python",
        price: 699  
      },
      {
        itemName:"Java",
        price: 1599  
      }
]

let totalPrice=course.reduce( (acc,items)=> acc + items.price  , 0 )   // sum of all prices
console.log(totalPrice)
