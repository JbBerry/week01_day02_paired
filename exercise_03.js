// Exercise 3

var users = {
  jonathan: {
    twitter: "jonnyt",
    lotteryNumbers: [6, 12, 49, 33, 45, 20],
    homeTown: "Stirling",
    pets: [
    {
      name: "fluffy",
      species: "cat"
    },
    {
      name: "fido",
      species: "dog"
    },
    {
      name: "spike",
      species: "dog"
    }
  ]
  },
  erik: {
    twitter: "eriksf",
    lotteryNumbers: [18, 34, 8, 11, 24],
    homeTown: "Linlithgow",
    pets: [
    {
      name: "nemo",
      species: "fish"
    },
    {
      name: "kevin",
      species: "fish"
    },
    {
      name: "spike",
      species: "dog"
    },
    {
      name: "rupert",
      species: "parrot"
    }
  ]
  },
  avril: {
    twitter: "bridgpally",
    lotteryNumbers: [12, 14, 33, 38, 9, 25],
    homeTown: "Dunbar",
    pets: [
      {
        name: "monty",
        species: "snake"
      }
    ]
  }
}


//Complete these tasks:

// 1. Get Jonathan's Twitter handle (i.e. the string `"jonnyt"`)
console.log(users.jonathan.twitter);
// 2. Get Erik's hometown
console.log(users.erik.homeTown);
// 3. Get the array of Erik's lottery numbers
console.log(users.erik.lotteryNumbers);
// 4. Get the type of Avril's pet Monty
console.log(users.avril.pets[0].species);
// 5. Get the smallest of Erik's lottery numbers

// 6. Return an array of Avril's lottery numbers that are even
// 7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
// 8. Change Erik's hometown to Edinburgh
// 9. Add a pet dog to Erik called "Fluffy"
// 10. Add another person to the users object
