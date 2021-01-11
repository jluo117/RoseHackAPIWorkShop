var buildTable = []
var guessed = false
var score = 0
var choosenPokemon = ""
async function getPokemon(){
  if (buildTable.length == 0){
    await $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json', function(data) {
        	var pokemons = (data["pokemon"]);
        	for (var pokemonID = 0; pokemonID < pokemons.length; pokemonID ++){
            var currentPokemon = pokemons[pokemonID]
        		buildTable.push((currentPokemon["name"],currentPokemon["img"]))
        	}
		});
  }
  var pokemon = buildTable[Math.floor(Math.random() * buildTable.length)]
  document.getElementById("Pokemon").src = pokemon[1]
  choosenPokemon = pokemon[0]
}
function compareGuess(userGuess){
  if (userGuess == choosenPokemon){
    score++
  }
  document.getElementById("score") = String(score)
}
