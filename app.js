// // Assignment 1

// // // requirements: 
// // - Create Empty array of fruits
// // - Add following fruits to fruits array: apple, banana, orange
// // - remove the first fruit from the array
// // - Update the second fruit to "Pear"
// // - Print the final result after performing the operations

// //empty array of fruits
// let fruits =[];
// console.log(fruits);

// //add following fruits: apple, banana, orange
// fruits.push("apple", "banana", "orange");
// console.log(fruits);

// // //remove the first fruit from array
// // fruits.shift();
// // console.log(fruits);
// //second method
// fruits.splice(0,1);
// console.log(fruits);

// //update the second fruit to "pear"

// fruits[1] = "pear";
// console.log(fruits);

// //print the final result.

// console.log(fruits);


// //assignment 2
// // requirements:
// // - Create an empty object called "person".
// // - Add the following properties to the "person" object:
// //    - name: "John"
// //    - age: 30
// //    - city: "New York"
// // - Remove the "age" property from the "person" object.
// // -  Add a new property called "job" with the value "Engineer" to the "person" object.
// // - Update the "city" property of the "person" object to "San Francisco".
// // - Print the final "person" object after performing the above operations.

// //create an empty object called person
// let person = {};
// console.log(person);

// //add following properties to the person object.
// person.name = "John";
// person.age = 30;
// person.city = "New York";

// console.log(person);

// //remove the age property
// delete person.age;
// console.log(person);

// //add new property called job and value "engineer"
// person.job = "Engineer";
// console.log(person);

// // update city property to San Francisco
// person.city = "San Francisco";
// console.log(person);

// //print final person object
// console.log(person);


//assignment 3

// requirements: 
// - Create an empty array called "cars".
// -  Add three car objects to the "cars" array. Each car object should have the following properties:
//     - make: "Toyota"
//     - model: "Camry"
//     - year: 2018
// - Remove the first car object from the "cars" array.
// -  Add a new car object to the "cars" array with the following properties:
//     - make: "Honda"
//     - model: "Civic"
//     - year: 2020
// - Update the "model" property of the second car object in the array to "Accord".
// - Print the final "cars" array after performing the above operations.

//empty array called cars
let cars = [];
console.log(cars);

//add three car objects each object should have three properties.
cars.push({
    make: "toyota",
    model: "Camry",
    year: 2018,
}, {
    make: "toyota",
    model: "Camry",
    year: 2018,
}, {
    make: "toyota",
    model: "Camry",
    year: 2018,});

console.log(cars);

//remove first object
cars.splice(0,1);
console.log(cars);

//add new car object.
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020,
})
console.log(cars);

//update the model of second object to "Accord"
cars[1].model = "Accord";
console.log(cars);

//print final cars array
console.log(cars);


