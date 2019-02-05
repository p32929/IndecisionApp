import React, {Component} from 'react';
import Header from "./AppComponents/Header";
import Action from "./AppComponents/Action";
import Options from "./AppComponents/Options";
import AddOptions from "./AppComponents/AddOptions";

class IndecisionApp extends Component {

    constructor(props) {
        super(props)

        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options: ["Option 1", "Option 2", "Option 4"]
        }
    }

    handleAddOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    handleRemoveAll() {
        this.setState((prevState) => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        var randomNum = Math.floor(Math.random() * this.state.options.length)
        var option = this.state.options[randomNum]
        alert(option)
    }

    render() {

        var title = "Indecision App"
        var subtitle = "a subtitle"

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                         handleDeleteOption={this.handleRemoveAll}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;