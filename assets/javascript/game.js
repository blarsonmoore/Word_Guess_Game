//Global Variables
var words = ["Adult", "Aeroplane", "Air", "Aircraft Carrier", "Airforce", "Airport", "Album", "Alphabet", "Apple", "Arm", "Army", "Baby", "Baby", "Backpack"]
var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
var wordLen = randomWord.length;
var displayLen = [wordLen];
var output = "";
var userGuess = "";


console.log(randomWord);
console.log(wordLen);

//For loop to display _ for each letter

for (var i = 0; i < randomWord.length; i++) {
  displayLen[i] = "_ ";
  output = output + displayLen[i];
}
document.getElementById("displayWord").innerHTML = output;
output = "";

// function click (randomWord) {
//   document.getElementById("clickMe").onclick;
// }

// document.getElementById("clickMe").onclick