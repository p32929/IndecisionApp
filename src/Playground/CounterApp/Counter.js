import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleZero = this.handleZero.bind(this)

        this.state = {
            count: 0
        }
    }

    handlePlus() {
        this.setState((ps) => {
            return {
                count: ps.count + 1
            }
        })
    }

    handleMinus() {
        this.setState((ps) => {
            return {
                count: ps.count - 1
            }
        })
    }

    handleZero() {
        this.setState((ps) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleZero}>0</button>
            </div>
        );
    }
}

export default Counter;