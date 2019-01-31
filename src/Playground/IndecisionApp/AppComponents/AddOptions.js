import React, {Component} from 'react';

class AddOptions extends Component {

    handleAddOption(e) {
        e.preventDefault()

        var option = e.target.elements.option.value
        if (option) {

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

export default AddOptions;