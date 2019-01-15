import React, { Component } from 'react';

class counter extends Component {

    styles = {
        badge : "badge m-2 badge-"
    }
    render() {
        return (
            <div>
                <span className={ this.counterStyle() }>{this.counterValue()}</span>
                <button  className = "btn m-2 btn-secondary" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn m-2 btn-danger" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    counterStyle = () => {
        return this.props.counter.value === 0 ? this.styles.badge + "warning" : this.styles.badge + "primary"
    }

    counterValue = () => {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value
    }
 }

export default counter;