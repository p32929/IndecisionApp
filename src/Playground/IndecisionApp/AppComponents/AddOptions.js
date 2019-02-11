import React, {Component} from 'react';

class AddOptions extends Component {


    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleAddOption(e) {
        e.preventDefault()

        var option = e.target.elements.option.value.trim()
        if (option) {
            this.props.handleAddOption(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className='add_options_button'>Add option</button>
                </form>
            </div>
        );
    }
}

export default AddOptions;