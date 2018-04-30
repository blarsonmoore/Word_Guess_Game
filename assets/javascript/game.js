var words = ["Adult", "Aeroplane", "Air", "Aircraft Carrier", "Airforce", "Airport", "Album", "Alphabet", "Apple", "Arm", "Army", "Baby", "Baby", "Backpack"]
var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
var wordLen = randomWord.length;



console.log(randomWord);
 console.log(wordLen);

 for (var i=0; i < randomWord.length; i++) {
   wordLen[i] = "_ ";
 }
 document.getElementById("displayWord").innerHTML = wordLen[i];
//Displays randomWord on screen
  // var html = "<p>" + randomWord + "</p>";
  // document.querySelector('#displayWord').innerHTML = html;

  // function wordFunction() {
  //   var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  // }