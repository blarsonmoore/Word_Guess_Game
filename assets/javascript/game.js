var words = ["Adult", "Aeroplane", "Air", "Aircraft Carrier", "Airforce", "Airport", "Album", "Alphabet", "Apple", "Arm", "Army", "Baby", "Baby", "Backpack"]



function wordFunction() {
  var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

  console.log(randomWord);
 

//Displays random word on screen
  var html = "<p>" + randomWord + "</p>";
  document.querySelector('#displayWord').innerHTML = html;
}
