
var wins = 1;
var losses = 1;
var counter = 0;

// Links to audio element
var audioElementWin = document.createElement("audio");
audioElementWin.setAttribute("src", "assets/Fairy Dust Sound Effect.mp3");

var audioElementLose = document.createElement("audio");
audioElementLose.setAttribute("src", "assets/glass-breaking-sound-effect.mp3");

// Randomly generated number to meet
var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#computerScore").text("Number to meet: " + targetNumber);


// each image gets a randomized value attributed to it
$("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);


// function to reset the game
var resetGame = function(){

    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#computerScore").text("Number to meet: " + targetNumber);

    $("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);


    counter = 0;
    $("#crystalScore").text("Your collection: " + counter);

}
// function to capture the score
var score = function(){
    if (counter === targetNumber) {
        audioElementWin.play();
        alert("You win!");
        $("#wins").text("Wins: " + wins++);
        resetGame();
  
      }
  
      else if (counter >= targetNumber) {
        audioElementLose.play();
        alert("You lose!! Please try again.");
        $("#losses").text("Losses: " + losses++);
        resetGame();
      }

}

// captures value for crystal1
$("#crystal1").on("click", function() {
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#crystalScore").text("Your collection: " + counter);
    score();



    

    // if (counter === targetNumber) {
    //   alert("You win!");
    //   $("#wins").text("Wins: " + wins++);
    //   resetGame();

    // }

    // else if (counter >= targetNumber) {
    //   alert("You lose!! Please try again.");
    //   $("#losses").text("Losses: " + losses++);
    //   resetGame();
    // }
   

});

// captures value for crystal2
$("#crystal2").on("click", function() {
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#crystalScore").text("Your collection: " + counter);
    score();
    
    
        
    
        // if (counter === targetNumber) {
        //   alert("You win!");
        //   $("#wins").text("Wins: " + wins++);
        //   resetGame();
        // }
    
        // else if (counter >= targetNumber) {
        //   alert("You lose!! Please try again.");
        //   $("#losses").text("Losses: " + losses++);
        //   resetGame();
        // }
       
    
    });


// captures for crystal3
    $("#crystal3").on("click", function() {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#crystalScore").text("Your collection: " + counter);
        score();
        
        
            
        
            // if (counter === targetNumber) {
            //   alert("You win!");
            //   $("#wins").text("Wins: " + wins++);
            //   resetGame();
            // }
        
            // else if (counter >= targetNumber) {
            //   alert("You lose!! Please try again.");
            //   $("#losses").text("Losses: " + losses++);
            //   resetGame();
            // }
           
        
        });

// captures value for crystal4
        $("#crystal4").on("click", function() {
            var crystalValue = ($(this).attr("value"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#crystalScore").text("Your collection: " + counter);
            score();
            
            
                
            
                // if (counter === targetNumber) {
                //   alert("You win!");
                //   $("#wins").text("Wins: " + wins++);
                //   resetGame();
                // }
            
                // else if (counter >= targetNumber) {
                //   alert("You lose!! Please try again.");
                //   $("#losses").text("Losses: " + losses++);
                //   resetGame();
                // }
               
            
            });


    
//  // Gets Link for Theme Song
//  var audioElement = document.createElement("audio");
//  audioElement.setAttribute("src", "assets/captainplanet24.mp3");

//  // Theme Button
//  $(".theme-button").on("click", function() {
//    audioElement.play();
//  });
//  $(".pause-button").on("click", function() {
//    audioElement.pause();
//  });
   

// $("#crystalScore").text("Your score: " + userSum);
    
  // var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// var randomCrystal = crystalValue[Math.floor(Math.random() * crystalValue.length)]
// for (var i = 0; i < crystalValue.length; i++) {
//      randomCrystal = crystalValue[Math.floor(Math.random() * crystalValue.length)]
//     console.log(randomCrystal[i]);
    
    // // For each iteration, we will create an imageCrystal
    //  var imageCrystal = $(".gems");

    //  // First each crystal will be given the class ".crystal-image".
    //  // This will allow the CSS to take effect.
    //  imageCrystal.addClass("crystal-image");

    //  // Each imageCrystal will be given a data attribute called data-crystalValue.
    // // This data attribute will be set equal to the array value.
    // imageCrystal.attr("data-crystalvalue", crystalValue[i]);

    // // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    // $(".gems").append(imageCrystal);

   
    // console.log(crystalValue[i]);
    
// });