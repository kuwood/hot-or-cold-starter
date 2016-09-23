const mongoose = require('mongoose');

let FewestGuessesSchema = new mongoose.Schema({
    fewestGuesses: { type: Number, required: true }
});

let Guess = mongoose.model('Guess', FewestGuessesSchema);

module.exports = Guess;
