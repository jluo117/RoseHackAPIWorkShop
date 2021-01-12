var buildTable = []
var guessed = false
var score = 0
var choosenPokemon = "NOT A Pokemon"
async function getPokemon(){
  if (buildTable.length == 0){
    await $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json', function(data) {
        	var pokemons = (data["pokemon"]);
        	for (var pokemonID = 0; pokemonID < pokemons.length; pokemonID ++){
            var currentPokemon = pokemons[pokemonID]
            let newPokemon = {name:currentPokemon["name"],image:currentPokemon["img"] }
        		buildTable.push(newPokemon)
        	}
		});

  document.getElementById("userGuess").value =''
  }

  var pokemon = buildTable[Math.floor(Math.random() * buildTable.length)]
  console.log(pokemon)
  document.getElementById("Pokemon").src = pokemon["image"]
  choosenPokemon = pokemon["name"]
  guessed = false
}
function compareGuess(userGuess){
  userGuess = userGuess.replace(/\s/g, '');
  console.log(choosenPokemon)
  console.log(userGuess)
  if (guessed){
    return
  }
  if (String(userGuess) == choosenPokemon){
    guessed = true
    score++
    console.log(score)
    getPokemon()
    document.getElementById("userGuess").value =''
    document.getElementById("score").style.color = "green";
  }
  else {
    document.getElementById("score").style.color = "red";
  }
  document.getElementById("score").innerHTML = String(score)
}
