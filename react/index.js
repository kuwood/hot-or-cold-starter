const React = require('react')
const ReactDOM = require('react-dom');
const connect = require('react-redux').connect;
const Provider = require('react-redux').Provider;
const store = require('./store');
const actions = require('./actions')
const GuessSubmit = require('./GuessSubmit')

let Game = React.createClass({
    newGame: function() {
        this.props.dispatch(actions.newGame())
    },
    render: function() {
        let guesses = this.props.guesses.map(guess => {
            return <li key={guess}>{guess}</li>
        })
        return (
            <div>
                <h1>Hot or Cold!</h1>
                <h4>{this.props.feedback}</h4>
                <GuessSubmit />
                <h4>Total Guesses: {this.props.guesses.length}</h4>
                <ul>{guesses}</ul>
                <button type="button" onClick={this.newGame}>New Game</button>
            </div>
        )
    }
})


let mapStateToProps = (state, props) => {
    return {
        guesses: state.guesses,
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
