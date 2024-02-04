/* iife- immediate invoke function expression it is the function that execute immediately and
         most import is used to avoid the global scope pollution or variables
         (function)(execution or call) used to defined the iife and has to put a ; at the end of the iife function to end it */
         
         (
            function func(){
            console.log("DB connected");
            }
         )();


         //also we can write arrow function in iife

         ( (name)=>{
           console.log(`${name},DB connected successfully`);
         })
         ("Sourabh");
