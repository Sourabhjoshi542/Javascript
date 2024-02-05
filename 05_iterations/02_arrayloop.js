//loops in [" "," "," "] array of string
//arr[{},{},{},{}] array of object


/* 
for of loop
const arr=[100,200,300,400,500]

for (const i of arr) {
    console.log(i)
}

const greeting="Welcome world"
for (const greet of greeting) {
    console.log(greet)
} */


//maps
const myMap=new Map()
myMap.set("IN","India")
myMap.set("USA","America")
myMap.set("FR","France")
//console.log(myMap)

for (const [key,value] of myMap) {
    console.log(key ,'-',value)
}

//Note - For of loop doestnot work with object so we use for in use 

// for in loop in object
const car={
    1:"bmw",
    2:"civic",
    3:"polo",
    4:"mustang"
}

for (const key in car) {    // it return the keys only so we have to access the object with object name[key]
    console.log(`car number ${key} is ${car[key]}`)     
}





// for in in array
const fruit=["apple","banana","grapes","orange"]
for (const key in fruit) {
     console.log(fruit[key])  
    }
