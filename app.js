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
// console.log(game);
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


for (let i = 0; i < game.gyms.length; i++) {
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
    console.log("POKEMON PARTY: ", pokemonParty.name);
}
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

for (const starterPokemon of pokemon) {  //printing out all the starter pokemons
    if (starterPokemon.starter) {
        console.log(`STARTER POKEMON: `, starterPokemon);
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

console.log(`EXERCISE 11, GAME ITEMS: `, game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (let i = 0; i < game.gyms.length; i++){
    if (game.gyms[i].difficulty < 6 && !game.gyms[i].completed) {  //if it's already completed, don't remark it
        game.gyms[i].completed = true;
    }
}

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function () {  //adding new method to game object
    const gymTally = {          //object to keep track of completed gyms
        completed: 0,
        incomplete: 0,

    };
    for (gym of this.gyms) {
        if (gym.completed) {
            gymTally.completed += 1;
        } else {
            gymTally.incomplete += 1;
        }
    };
    console.log(`EXCERCISE 13 - GYM TALLY: `, gymTally);   //logs the object to the console
    
}
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
    return this.party.length;  //length can easily count the number of items in an array
}

// console.log(game);
// console.log(game.partyCount())

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

//very similar to previous challenge, could have written a function with the 
//the difficulty level passed in to avoid rewriting code several times
for (let i = 0; i < game.gyms.length; i++){    
    if (game.gyms[i].difficulty < 8 && !game.gyms[i].completed) {
        game.gyms[i].completed = true;
    }
}

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);

//We have added several methods to the object and learned how to access and maniuplate the data

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
game.party.sort((a, b) => b.hp - a.hp);  //sort the hp value highest to lowest
console.log(`EXCERCISE 17, SORTED HP: `, game.party);
//it works by comparing the 2 values and returning a - or + number

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
game.collection = [];
game.catchPokemon = function (pokemonObj) { 
    while (this.party.length >= 6) {
        const extraPokeman = this.party.pop()
        this.collection.push(extraPokeman);
    }
    this.party.push(pokemonObj);
    const myPokeball = this.items.find(item => item.name === 'pokeball');  //return the object that is named pokeball
    myPokeball.quantity -= 1;    //once we grab the correct item, decrease the pokeballs by 1
}

game.catchPokemon(pokemon[124]);  //catch a pokemon

console.log('EXERCISE 18 - ITEMS: ', game.items);  //log the items to check the pokeball number
/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = function (pokemonObj) { 
    const myPokeball = this.items.find(item => item.name === 'pokeball');  //return the object that is named pokeball
    if (myPokeball.quantity > 0) {
        myPokeball.quantity -= 1;    //once we grab the correct item, decrease the pokeballs by 1
        while (this.party.length >= 6) {
            const extraPokeman = this.party.pop()
            this.collection.push(extraPokeman);
        }
        this.party.push(pokemonObj);
    } else {
        console.log("Not enough pokeballs to catch pokemon")
    }
    
}

game.catchPokemon(pokemon[122]);  //catch a pokemon
game.catchPokemon(pokemon[117]);  //catch a pokemon
game.catchPokemon(pokemon[36]);  //catch a pokemon
game.catchPokemon(pokemon[47]);  //catch a pokemon
game.catchPokemon(pokemon[19]);  //catch a pokemon
game.catchPokemon(pokemon[104]);  //catch a pokemon
game.catchPokemon(pokemon[105]);  //catch a pokemon, should show error message about pokeballs

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function (pokemonStr) {
    pokemonStr = pokemonStr.toLowerCase().trim();
    //search the pokemon object array looking for the name of the pokemon
    const myPokemonObj = pokemon.find(poke => poke.name.toLowerCase().trim() === pokemonStr);
    
    if (!myPokemonObj) {
        // console.log("Pokemon does not exist")
        return "Pokemon does not exist";  //instructions asked us to return a string instead of just logging it?
    }   //if the Pokemon does not exist, the function will return and the rest of the code won't run

    const myPokeball = this.items.find(item => item.name === 'pokeball');  //return the object that is named pokeball
    if (myPokeball.quantity > 0) {
        myPokeball.quantity -= 1;    //once we grab the correct item, decrease the pokeballs by 1
        while (this.party.length >= 6) {
            const extraPokeman = this.party.pop()
            this.collection.push(extraPokeman);
        }
        this.party.push(myPokemonObj);

    } else {
        console.log("Not enough pokeballs to catch pokemon")
    }
    
}

console.log(game.catchPokemon("Spearow"));
console.log(game.catchPokemon("error"));


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonByGroup = {};
pokemon.forEach(pokemon => {
    const type = pokemon.type;    //find the type
    if (!pokemonByGroup[type]) {   //if it doesn't already exist, create it
        pokemonByGroup[type] = [];  
    }
    pokemonByGroup[type].push(pokemon);   //push the pokemon onto the object
});

console.log(pokemonByGroup);







