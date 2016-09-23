const React = require('react')
const connect = require('react-redux').connect
const actions = require('./actions')

let GuessSubmit = React.createClass ({
    submitGuess: function() {
        let guess = this.refs.textInput.value
        this.props.dispatch(actions.addGuess(guess));
        if (this.props.feedback === 'Bingo!') {
            this.props.dispatch(actions.sendGuess(this.props.guesses.length))
        }
    },
    componentDidUpdate: function() {
        if (this.props.feedback === 'Bingo!') {
            this.props.dispatch(actions.sendGuess(this.props.guesses.length))
        }    
    },
    render: function() {

        return (
            <div>
                <input type="text" ref="textInput" />
                <button type="button" onClick={this.submitGuess}>
                    Submit
                </button>
            </div>
        );
    }
});

let mapStateToProps = (state, props) => {
    return {
        guesses: state.guesses,
        feedback: state.feedback
    }
}

let Container = connect(mapStateToProps)(GuessSubmit)
module.exports = Container;
