import React, {Component} from 'react';

class Action extends Component {

    handleClick() {
        alert('hahaha')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    What should I do?
                </button>
            </div>
        )
    }
}

export default Action;