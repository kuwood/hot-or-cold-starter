const actions = require('./actions')

function randomInt(min, max) {
  return ( Math.floor(Math.random() * (max - min + 1)) + min );
}

let initialGameState = {
    targetNum: randomInt(1, 101),
    guessCount: 0,
    guesses: []
};

let gameReducer = (state, action) => {
    state = state || initialGameState

    if (action.type === actions.NEW_GAME) {
        return state = Object.assign({}, initialGameState, {targetNum: randomInt(1,101)})
    } else if (action.type === actions.ADD_GUESS) {
        return Object.assign({}, state, {guessCount: state.guessCount += 1, guesses: state.guesses.concat(action.number)})
    }
    return state;
}

exports.gameReducer = gameReducer;
