//Business logic

let icecreams = ['strawberry', 'cookie-dough', 'mint', 'yogurt'];
  


$(document).ready(function() {
  icecreams.forEach(function(icecream) {
    $("#output").append("I love " + icecream + "!" + "<br>");
  });
});


//User-interface logic
// $("#icecream").text(icecream)

// const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
// arrayOfThingsILike.forEach(function(thing) {
//   $("#likable-things").append(" " + thing + "!");
// });