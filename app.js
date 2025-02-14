const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    catchPokemon(pokemonObj) {
        this.party.push(pokemonObj);
    },
  }
  
//   console.dir(pokemon, { maxArrayLength: null })

// console.log(game)
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty = "Easy";
console.log(game);
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


const STARTER = 3 // I am using a constant here so I can change the starter Pokemon if desired

game.party.push(pokemon[STARTER]);
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/



game.party.push(pokemon[7], pokemon[14], pokemon[29]);  // three random pokeman's added to party

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

const numOfGyms = game.gyms.length;  //storing this amount to improve readability

for (let i = 0; i < numOfGyms; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// For this exercise I am assuming that the starter Pokemon will always be in the first positition in the array

let newPokemon;
switch (game.party[0].number) {  // figure out which pokemon is evolved into
    case 1:
        newPokemon = pokemon[1];
        break;
    case 4:
        newPokemon = pokemon[4];
        break;
    case 7:
        newPokemon = pokemon[7];
        break;
    case 25:
        newPokemon = pokemon[25];
        
}
game.party.splice(0, 1, newPokemon);  //replace the pokemon at index zero with the new pokemon

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (const pokemonParty of game.party) {
    console.log(pokemonParty.name)
}
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

for (const starterPokemon of pokemon) {  //printing out all the starter pokemons
    if (starterPokemon.starter) {
        console.log(starterPokemon);
    }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// method was added to original game object up at the top
const myPokemon = pokemon[75];   //catch a random Pokemon
game.catchPokemon(myPokemon);    //use the method to add it to game object party array

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

//updating catchPokemon function

game.catchPokemon = function (pokemonObj) { 
    this.party.push(pokemonObj);
    const myPokeball = this.items.find(item => item.name === 'pokeball');  //return the object that is named pokeball
    myPokeball.quantity -= 1;    //once we grab the correct item, decrease the pokeballs by 1
}

game.catchPokemon(pokemon[99]);  //catch a random pokemon

console.log(game.items);


// console.log(game);