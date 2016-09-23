let fetch = require('isomorphic-fetch');

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

export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
export const fetchFewestGuesses = fewestGuesses => {
    return {
        type: FETCH_FEWEST_GUESSES,
        fewestGuesses: fewestGuesses
    }
}

export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
export const saveFewestGuesses = fewestGuesses => {
    return {
        type: SAVE_FEWEST_GUESSES,
        fewestGuesses: fewestGuesses
    }
}

export const fetchGuesses = () => {
    return dispatch => {
        let url = 'http://localhost:8080/fewest-guesses';
        return fetch(url).then(response => {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            console.log(response);
            return response.json()
        })
        .then(data => {
            let guess = data[0].fewestGuesses
            console.log(data[0], "guess for dispatch");
            return dispatch(
                fetchFewestGuesses(guess)
            )
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const sendGuess = numberOfGuesses => {
    console.log(numberOfGuesses, "params");
    return dispatch => {
        let url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({numberOfGuesses})
        })
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            console.log(response);
            return response.json()
        })
        .then(data => {
            return dispatch(
                saveFewestGuesses(numberOfGuesses)
            )
        })
        .catch(error => {
            console.log(error);
        })
    }
}
