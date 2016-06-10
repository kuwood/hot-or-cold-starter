var targetNum;
var guessCount = 0;
var guesses = [];
function randomInt(min, max) {
  return ( Math.floor(Math.random() * (max - min + 1)) + min );
}

function newGame() {
  targetNum = randomInt(1, 101);
  console.log(targetNum)
  guessCount = 0;
  guesses = [];
  $('#guessList').children().remove()
}

function intCheck(num) {
  var reg = RegExp(/^[1-9][0-9]?$|^100$/)
  if  (reg.test(num) != true) {
    alert("Your number must be a whole number from 1-100!");
  } else {
    return true;
  }
}

function findDiff(guess) {
  if (guess - targetNum < 0) {
    return (guess - targetNum) * -1;
  } else {
    return guess - targetNum;
  }
}

function guessFeedback(guess) {
  if (guess > 50) {
    $('#feedback').text('Ice cold!')
    console.log('ice cold')
  } else if (guess > 30 && guess <= 50) {
    $('#feedback').text('Cold!')
    console.log('cold')
  } else if (guess > 20 && guess <= 30) {
    $('#feedback').text('Warm!')
    console.log('warm')
  } else if (guess > 10 && guess <= 20) {
    $('#feedback').text('Hot!')
    console.log('hot')
  } else if (guess > 0 && guess <= 10) {
    $('#feedback').text('Very hot!')
    console.log('Very hot')
  } else if (guess === 0) {
    $('#feedback').text('Bingo!')
    console.log('bingo!')
  } else {
    console.log('error you did something wrong')
  }
}

function relativeFeedback(newguess, lastguess) {
  if (findDiff(newguess) < findDiff(lastguess)) {
    $('#feedback').text('Warmer!');
  } else if (newguess === targetNum) {
    $('#feedback').text('Bingo!');
  } else if ((findDiff(newguess)) > 0 && (findDiff(newguess)) <= 10) {
    $('#feedback').text('Very hot!')
  }else if (newguess === lastguess) {
    $('#feedback').text('You just guessed that...')
  }else {
    $('#feedback').text('Colder!');
  }
}


$(document).ready(function(){
  console.log("Oh, so your the cheating type huh?")
  /*--- prevent form submit ---*/
  $("form").submit(function(e) {
    e.preventDefault();
  });
  /*--- Start new game on load ---*/
    newGame();
  /*--- Start new game on new game click ---*/
    $(".new").click(function() {
      newGame();
    });
  /*--- Submit guess ---*/
    $("#guessButton").click(function() {
      if (intCheck($('input').val()) === true) {
        var currentGuess = parseInt($("#userGuess").val());
        guesses.push(currentGuess);
        console.log(currentGuess);
        console.log("The difference is " + findDiff(currentGuess));
  /*--- if first guess run guessFeedback otherwise run relativeFeedback ---*/
        if (guessCount === 0) {
          console.log(guessFeedback(findDiff(currentGuess)));
        } else {
          relativeFeedback(currentGuess, guesses[guesses.length - 2])
        }
        guessCount += 1;
        $('#count').text(guessCount);
        $('#guessList').append("<li>" + currentGuess + "</li>")
      }
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
