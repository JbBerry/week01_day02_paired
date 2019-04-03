// Exercise 2

var unitedKingdom = [
  {
    name: "Scotland",
    population: 5295000,
    capital: "Edinburgh"
  },
  {
    name: "Wales",
    population: 3063000,
    capital: "Swansea"
  },
  {
    name: "England",
    population: 53010000,
    capital: "London"
  }
]
// Complete these tasks:

// 1. Change the capital of Wales from "Swansea" to "Cardiff".

unitedKingdom[1].captial = "Cardiff";
// console.log(unitedKingdom);

// 2. Create an object for Northern Ireland and add it to the `unitedKingdom` array (The capital is Belfast, and the population is 1,811,000).
unitedKingdom.push({name:"Northern Ireland",population:1811000, capital:"Belfast" });
// console.log(unitedKingdom);

// 3. Use a loop to print the names of all the countries in the UK.

for (var countries of unitedKingdom){
  console.log(countries.name);
}



// 4. Use a loop to find the total population of the UK.
var totalPopulation = 0;
for (var i = 0; i < unitedKingdom.length; i++) {
  totalPopulation += unitedKingdom[i].population;
}
console.log(totalPopulation);
