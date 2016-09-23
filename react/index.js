const React = require('react')
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const Provider = require('react-redux').Provider;
const store = require('./store');
const actions = require('./actions')
const GuessSubmit = require('./GuessSubmit')

let Game = React.createClass({
    componentDidMount: function() {
        console.log(this.props.fewestGuesses, " props fewestGuesses");
        this.props.dispatch(
            actions.fetchGuesses(this.props.fewestGuesses)
        );
    },
    newGame: function() {
        this.props.dispatch(actions.newGame())
    },
    render: function() {
        let guesses = this.props.guesses.map(guess => {
            return <li key={guess}>{guess}</li>
        })
        console.log(guesses[guesses.length -1], "most recent guess");
        return (
            <div>
                <h1>Hot or Cold!</h1>
                <h4>{this.props.feedback}</h4>
                <GuessSubmit />
                <ul>{guesses}</ul>
                <h4>Total Guesses: {this.props.guesses.length}</h4>
                <h4>Fewest guesses record: {this.props.fewestGuesses}</h4>
                <button type="button" onClick={this.newGame}>New Game</button>
            </div>
        )
    }
})


let mapStateToProps = (state, props) => {
    return {
        guesses: state.guesses,
        fewestGuesses: state.fewestGuesses,
        feedback: state.feedback
    }
}

let Container = connect(mapStateToProps)(Game)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <Container />
        </Provider>,
        document.getElementById('app')
    );
});
