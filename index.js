// In this exercise, we are going to search through objects and become more and more familiar with accessing data inside large objects and arrays of objects.

// For each challenge, write your answers into the `challenge.js` file in this repo.

// ## The Solar System, part 1

// The following data structure, `solarSystem`, is a common data structure: an **array** of **objects**. You will see this particular data structure more and more as you venture into JSON and servers. This one is an **array** of **objects** which also contains **arrays**.

// Note that the objects do not have names. They are just anynmous objects listed in an array. 

// Given the following data structure of arrays and objects:

// javascript
const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
  { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
  { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];


// Write Javascript that does the following:

// EXAMPLE:
// - Print the boolean for Mercury's ringSystem

// ANSWER

// javascript
// console.log(solarSystem[0].ringSystem);



// 1. Print the array of Jupiter's moons to the console (no _for loop_, just print the entire array).
console.log(solarSystem[4].moons);
// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[solarSystem.length-1].moons[1]);
// 3. Add a new moon called "Endor" to Venus' moons array.
console.log(solarSystem[1].moons.push("Endor"));
// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
console.log(solarSystem.push( {name: "Pluto", ringSystem: false, moons: ["Charon"]} ));
// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
console.log(solarSystem[2].diameter = 7926.2);
console.log(solarSystem[2]);
// 6. Change Mercury's ringSystem boolean to true.
console.log(solarSystem[0].ringSystem = true);
// 7. Change Uranus' moon "Umbriel" to "Oberon"
console.log(solarSystem[6].moons[3] = "Oberon");
// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.
// Expected result for question 8:
// > { name: 'Mercury', ringSystem: true, moons: [] }
// > 
// > { name: 'Jupiter', ringSystem: true, moons: [ 'Europa', 'Ganymede', 'Io', 'Callisto' ] }
// > 
// > { name: 'Saturn', ringSystem: true, moons: [ 'Titan', 'Enceladus', 'Rhea', 'Mimas' ] }
// > 
// > { name: 'Uranus', ringSystem: true, moons: [ 'Miranda', 'Titania', 'Ariel', 'Oberon' ] }
// > 
// > { name: 'Neptune', ringSystem: true, moons: [ 'Triton', 'Nereid' ] }

for (let planet of solarSystem) {
    if (planet.ringSystem) {
        console.log(planet);
    };
};

// <br>