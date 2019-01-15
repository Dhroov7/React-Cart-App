import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 2 },
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 0 }
        ]
    }
    render() {
        return (
            <div>
                <button className="btn btn-success m-2" onClick={this.addCounter}>Add</button>
                <button className="btn btn-primary m-2" onClick={this.resetCounters}>Reset</button>
                {this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.deleteCounter} counter={counter} onIncrement={this.incrementCounter}/>)}
            </div>
        );
    }

    deleteCounter = (counterId) => {
        this.setState({ counters: this.state.counters.filter(counter => counter.id !== counterId) })
    }

    resetCounters = () => {
        let counters = this.state.counters.map(counter => {
            counter.value = 0 
            return counter
        })
        this.setState({counters})
    }

    incrementCounter = (counter) => {
        let tempCounter = this.state.counters
        let index = tempCounter.indexOf(counter)
        tempCounter[index].value = tempCounter[index].value + 1
        this.setState({counters: tempCounter})
    }

    addCounter = () => {
        let counter = {
            id: this.state.counters.length,
            value: 0
        }

        let counters = this.state.counters
        counters.push(counter)
        this.setState({counters})
    }
}

export default Counters;