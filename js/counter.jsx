var React = require('react');

var Counter = React.createClass({

    getInitialState: function() {
        return {
            count: 0
        };
    },

    add: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    subtract: function() {
        var count = this.state.count -1;
        if (this.state.count > 0) {
            this.setState({ count });
        }
    },

    render: function() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.subtract}>Subtract 1</button>
                <button onClick={this.add}>Add 1</button>
            </div>
        );
    }
});


module.exports = Counter;
