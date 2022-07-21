const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
// let divisible_by_3 = pokemon.filter( (pokemon_object)=> pokemon_object.id%3 === 0);
// console.log(divisible_by_3);

// // an array of pokémon objects that are "fire" type
// let arr_fire_type= pokemon.filter((firetype)=> firetype.types.includes("fire"))
// console.log(arr_fire_type)
// // an array of pokemon objects that have more than one type

// let more_then_one_type = pokemon.filter((two_types)=> two_types.types.length)
// console.log(more_then_one_type)
// // an array with just the names of the pokemon
// let arr_pokemon_names = pokemon.map((pokemon)=>pokemon.name)
// console.log(arr_pokemon_names)

// // an array with just the names of pokemon with an id greater than 99
// let pokemon_greater_then_99 = pokemon.filter((ninety_nine)=>ninety_nine.id>99)
// console.log(pokemon_greater_then_99)
// an array with just the names of the pokemon whose only type is poison
let pokemon_poison_name = pokemon.filter((poison)=>poison.types[0]==="poison"&& poison.types.length===1).map((pokemon_object)=>pokemon_object.name)
console.log(pokemon_poison_name)
// // an array containing just the first type of all the pokemon whose second type is 'flying'
// let second_flying = pokemon.filter ((pokemon_object)=>pokemon_object.types[1] === "flying").map((pokemon_object)=> pokemon_object.types[0])
// console.log (second_flying)

// a  count of the number of pokemon that are normal type