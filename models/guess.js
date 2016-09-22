const mongoose = require('mongoose');

let FewestGuessesSchema = new mongoose.Schema({
    guess: { type: Number, required: true }
});

let Guess = mongoose.model('Guess', FewestGuessesSchema);

module.exports = Guess;
