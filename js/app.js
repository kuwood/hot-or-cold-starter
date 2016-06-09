function newGame() {
  var targetNum = randomInt(1, 101);
  console.log(targetNum)
}

function randomInt(min, max) {
  return ( Math.floor(Math.random() * (max - min + 1)) + min );
}

$(document).ready(function(){
  /*--- Start new game on load ---*/
    newGame();
  /*--- Start new game on new game click ---*/
    $(".new").click(function() {
      newGame();
    });
  /*--- Submit guess ---*/
    $("#guessButton").click(function() {
      var currentGuess = parseInt($("#userGuess").val());
      console.log(currentGuess);
    });


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
