var buildTable = []
var guessed = false
var score = 0
var choosenPokemon = "NOT A Pokemon"
async function getPokemon(){
  
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
