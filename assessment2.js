Assessment 2

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question 8
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let arr =[10,20,30,40,3,10]
let n =arr.reduce((acc,element)=>{
    if(!acc.includes(element)){  // checking if acc already include the element or not to remove the duplicacy 
      acc.push(element)
}  
return acc  // acc will have the unqie element
},[])
console.log(n)

// Explaination  - We use the reduce method with includes to get the output in which we passed the  condition if the array  include the value then it push it into the accumilater. 


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question 9
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let input= ["Testing", "The", "Code"]
let output =input.sort((a,b)=> 
    a.length > b.length?1:-1)  // checking the input length by sort 
    
console.log(output)

// Explaination - We use the sort method which sort the array by the length of the words using comparison function 


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  Question 10
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function check(input){
    if(Array.isArray(input)){
        return true
    }return false
}
let a = [10,20,30,40,50,560,9]
let b ={hello:"there"}
let c ={}
let d =[]
console.log(`Is a is an Array? `+check(a))
console.log(`Is b is an Array? `+check(b))
console.log(`Is c is an Array? `+check(c))
console.log(`Is d is an Array? `+check(d))

// Explainatoin - We create a function check which take the output of the variable that we assign the value and use the inbuild function which return true and false if variable is Array or not.


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question 11
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
    ];
    let output=library.sort((a,b)=>(a.title > b.title) ? 1 : -1)
    console.log(output)
    
    // Explaination -- Using sort method with the comparison function and sorting it in ascending order 



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question 12
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// First we create the array of Objet and assign it the the variable arrOfObj 

var arrOfObj=[
    {name: 'Rohan', physics: 20, chemistry: 18, math: 26},
    {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, 
    {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, 
    {name: 'Abhishek', physics: 21, chemistry: 26, math: 23}, 
    {name: 'Aashish', physics: 25, chemistry: 16, math: 18}
    ];
    
//  the reduce function to take out a single result in an object. we make the acc as an empty object and for Item we use the element

    let output =arrOfObj.reduce((acc,element)=>{
    
     //  acc is empty then we make pass acc[element.name] as the KEY and the pass all the subject marks as the value and add them
     
        acc[element.name]=element.physics +element.chemistry+element.math
    
        //  Return of the new acc
        
      return acc
      
      
    },{})
    console.log(output)

// Explaination - Reduce function help us to iterate the every element of the arrOfObj and use the object property we make the key of element.name and add all the element of subject 


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  Question 13
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Given array of input

let input= [“Test”, true, null, false, 0,]

// Use inbuild function filter 
let output = input.filter((element)=>{
    
    // Pass the conditon of true  and return the element
    if(element){
        return element
    }
})
console.log(output)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  Question 14
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let input= [2,8,[6],3,3,5,3,4,[5,4]]
let count =0 // create variable count for counting the value
input.forEach((element)=>{
    if(Array.isArray(element)){ // passing the condition array have the nested array
        count++   // incrementing the count value 
    }
})
console.log(count)

// Explaination -  forEach itrate the array and checking the array have the nested array by the Array.isArray and increment the count value
