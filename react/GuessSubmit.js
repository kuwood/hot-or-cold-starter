const React = require('react')
const connect = require('react-redux').connect
const actions = require('./actions')

let GuessSubmit = React.createClass ({
    submitGuess: function() {
        let guess = this.refs.textInput.value
        this.props.dispatch(actions.addGuess(guess));
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

// let mapStateToProps = (state, props) => {
//     return {
//         guesses: state.guesses
//     }
// }

let Container = connect()(GuessSubmit)
module.exports = Container;
