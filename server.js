/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

mongoose.connect('mongodb://localhost/hot-or-cold-starter-dev');
mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

app.listen(8080);
console.log('listening on 8080');

const Guess = require('./models/guess');

app.get('/fewest-guesses', (req, res) => {
    Guess.find((err, guesses) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.json(guesses);
    });
});

app.post('/fewest-guesses', (req, res) => {
    //find guess document
    Guess.findOne((err, guess) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        //if req guess is less than guess in db. update the document
        if (guess.fewestGuesses > req.body.fewestGuesses) {
            Guess.update({
                fewestGuesses: req.body.fewestGuesses
            }, (err, guess) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                res.status(201).json(guess);
            });
        } else {
            res.status(200).json(guess);
        }
    });
});
