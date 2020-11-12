// User identity
var identityName = prompt("What's your name?");
var identityLastName = prompt("What's your last name?");
document.getElementById("identityName").innerHTML = "Hello" + " " + identityName + " " + identityLastName;


// User favorite color
var favoriteColor = prompt("What's your favorite color?");
document.getElementById("favoriteColor").innerHTML = "Your favorite color is" + " " + favoriteColor;

// User age
var age = prompt("How old are you?");
var year = 2020 - age;
document.getElementById("year").innerHTML = "Your year of birth is" + " " + year;

// User password
var unsecurePassword = identityName + identityLastName + favoriteColor + year;
document.getElementById("unsecurePassword").innerHTML = "Your unsecure password is" + " " + unsecurePassword;
