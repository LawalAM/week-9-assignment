// Build a simple loop, inside a function that takes an array and prints the value of the array to the console.

function printArrayValues(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}

//For Example
let myArray = ['orange', 'banana', 'apple', 'pawpaw', 'kiwi']
printArrayValues(myArray)