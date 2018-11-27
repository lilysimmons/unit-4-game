
var wins = 0;
var losses = 0;
var counter = 0;

// Randomly generated score to meet
var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#computerScore").text("Score to meet: " + targetNumber);


// each image gets a randomized value attributed to it
$("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);






// logic for crystal1
$("#crystal1").on("click", function() {
var crystalValue = ($(this).attr("value"));
crystalValue = parseInt(crystalValue);
counter += crystalValue;



$("#crystalScore").text("Your Score: " + counter);


    

    if (counter === targetNumber) {
      alert("You win!");
      $("#wins").text("Wins: " + wins++);

    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      $("#losses").text("Losses: " + losses++);
    }
   

});

// logic for crystal2
$("#crystal2").on("click", function() {
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    
    
    
    $("#crystalScore").text("Your Score: " + counter);
    
    
        
    
        if (counter === targetNumber) {
          alert("You win!");
          $("#wins").text("Wins: " + wins++);
        }
    
        else if (counter >= targetNumber) {
          alert("You lose!!");
          $("#losses").text("Losses: " + losses++);
        }
       
    
    });


// logic for crystal3
    $("#crystal3").on("click", function() {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        
        
        
        $("#crystalScore").text("Your Score: " + counter);
        
        
            
        
            if (counter === targetNumber) {
              alert("You win!");
              $("#wins").text("Wins: " + wins++);
            }
        
            else if (counter >= targetNumber) {
              alert("You lose!!");
              $("#losses").text("Losses: " + losses++);
            }
           
        
        });

// logic for crystal4
        $("#crystal4").on("click", function() {
            var crystalValue = ($(this).attr("value"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            
            
            
            $("#crystalScore").text("Your Score: " + counter);
            
            
                
            
                if (counter === targetNumber) {
                  alert("You win!");
                  $("#wins").text("Wins: " + wins++);
                }
            
                else if (counter >= targetNumber) {
                  alert("You lose!!");
                  $("#losses").text("Losses: " + losses++);
                }
               
            
            });



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