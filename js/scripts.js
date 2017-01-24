// Movie Object
// Params: title = string, desc = string, releaseDate = string, times = string array
// function Movie (movieTitle, desc, releaseDate) {
//   this.movieTitle = movieTitle;
//   this.desc = desc;
//   this.releaseDate = releaseDate;
// }

// Ticket object
// Params: movie = Movie object, age = number, time = string
function Ticket (movieTitle, age, time, price){
  this.movie = movieTitle;
  this.age = age;
  this.time = time;
  this.price = price;
}
// get price function
var getPrice = function(age, time, releaseDate){
  var age = age;
  var time = time;
  var releaseDate = releaseDate;
  var price = 15.00;

  if ((time < 13 || time > 23) || (releaseDate === "old")) {
    price = 9.00;
  }

  if (age >= 75){
    price = price * .5;
  } else if (age >= 60){
    price = price * .75;
  } else if (age <= 5){
    price = price * .25;
  }
  return price;
};

var getReleaseDate = function(movieTitle){
  if (movieTitle === "Rogue One" || movieTitle === "La La Land"){
    return "new";
  } else {
    return "old";
  }
}

// Bill function
function calculateBill(Ticket){
  var totalPrice

  return totalPrice;
}

$(function(){
  $("form#userInput").submit(function(event){
    var movieTitle =  $("#movie-title").val();

    var age = parseInt($("#age").val());

    var time = $("#time").val();
    var releaseDate = getReleaseDate(movieTitle);
    var price = getPrice(age, time, releaseDate);
    var newTicket = new Ticket(movieTitle, age, time, price);

    $("#show-movie").text(newTicket.movie);
    $("#show-time").text(newTicket.time);
    $("#show-ticket-number").text("1");
    $("#show-price").text("$" + newTicket.price.toFixed(2));

    event.preventDefault();
  });
});
