const actions = require('./actions')

function randomInt(min, max) {
  return ( Math.floor(Math.random() * (max - min + 1)) + min );
}

let initialGameState = {
    targetNum: randomInt(1, 101),
    feedback: "Make a Guess (numbers only)",
    guessCount: 0,
    guesses: [],
    fewestGuesses: null
};

let gameReducer = (state, action) => {
    state = state || initialGameState

    if (action.type === actions.NEW_GAME) {
        return Object.assign({}, initialGameState, {targetNum: randomInt(1,101)})
    } else if (action.type === actions.ADD_GUESS) {
        //TODO: feedback rules
        let guess = action.number;
        let targetNum = state.targetNum
        let diff;
        let feedback;
        //find the guess/targetnum difference
        if (guess - targetNum < 0) {
          diff = (guess - targetNum) * -1;
        } else {
          diff = guess - targetNum;
        }
        //set feedback
        if (diff > 50) {
          feedback = 'Ice cold!'
          console.log('ice cold')
      } else if (diff > 30 && diff <= 50) {
          feedback = 'Cold!'
          console.log('cold')
      } else if (diff > 20 && diff <= 30) {
          feedback = 'Warm!'
          console.log('warm')
      } else if (diff > 10 && diff <= 20) {
          feedback = 'Hot!'
          console.log('hot')
      } else if (diff > 0 && diff <= 10) {
          feedback = 'Very hot!'
          console.log('Very hot')
      } else if (diff === 0) {
          feedback = 'Bingo!'
          alert("You won! Feel free to start a new game using the button below")
          console.log('bingo!')
        } else {
          console.log('error you did something wrong')
        }
        return Object.assign({}, state, {guessCount: state.guessCount += 1, guesses: state.guesses.concat(action.number), feedback: feedback})
    } else if (action.type === actions.FETCH_FEWEST_GUESSES) {
        return Object.assign({}, state, {fewestGuesses: action.fewestGuesses})
    } else if (action.type === actions.SAVE_FEWEST_GUESSES) {
        return Object.assign({}, state, {fewestGuesses: action.fewestGuesses})
    }
    console.log(state);
    return state;
}

exports.gameReducer = gameReducer;
