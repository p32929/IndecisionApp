import React, {Component} from 'react';
import Header from "./AppComponents/Header";
import Action from "./AppComponents/Action";
import Options from "./AppComponents/Options";
import AddOptions from "./AppComponents/AddOptions";

class IndecisionApp extends Component {

    constructor(props) {
        super(props)

        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: ["Option 1", "Option 2", "Option 4"]
        }
    }

    handleDeleteOption() {
        this.setState((ps) => {
            return {
                options: []
            }
        })
    }

    render() {

        var title = "Indecision App"
        var subtitle = "a subtitle"

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions/>
            </div>
        );
    }
}

export default IndecisionApp;