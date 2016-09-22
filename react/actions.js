// generate winning number
// making a guess (action)
// feedback
// guess history
// guess number
// correct guess
// new game(generate new number)(action)
// clear guess history

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (number) => {
    return {
        type: ADD_GUESS,
        number: number
    }
}

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => {
    return {
        type: NEW_GAME
    }
}

// exports.ADD_GUESS = ADD_GUESS;
// exports.addGuess = addGuess;
// exports.NEW_GAME = NEW_GAME;
// exports.newGame = newGame;
