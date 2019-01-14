import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0
    }

    styles = {
        badge : "badge m-2 badge-"
    }
    render() {
        return (
            <div>
                <span className={ this.counterStyle() }>{this.conterValue()}</span>
                <button  className = "btn btn-secondary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }

    incrementCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    counterStyle = () => {
        return this.state.count === 0 ? this.styles.badge + "warning" : this.styles.badge + "primary"
    }

    conterValue = () => {
        return this.state.count === 0 ? "Zero" : this.state.count
    }
 }

export default counter;