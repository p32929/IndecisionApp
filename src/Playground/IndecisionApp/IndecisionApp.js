import React, {Component} from 'react';
import Header from "./AppComponents/Header";
import Action from "./AppComponents/Action";
import Options from "./AppComponents/Options";
import AddOptions from "./AppComponents/AddOptions";
import OptionModal from "./AppComponents/OptionModal";

class IndecisionApp extends Component {

    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options: [],
            selectedOption: undefined
        }
    }


    componentDidMount() {
        console.log("componentDidMount")

        try {
            var json = localStorage.getItem('options')
            var options = JSON.parse(json)
            if (options) {
                this.setState(() => ({options: options}))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")

        if (prevState.options.length !== this.state.options.length) {
            var json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleAddOption(option) {
        if (this.state.options.indexOf(option) > -1) {
            alert('This option already exists')
        } else {
            this.setState((prevState) => ({options: prevState.options.concat([option])}))
        }
    }

    handleDeleteOption(otr) {
        this.setState((ps) => ({
            options: ps.options.filter((option) => {
                return otr !== option;
            })
        }))
    }

    handleDeleteOptions() {
        this.setState({options: []})
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
                         handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />

                <OptionModal
                    selectedOption={this.state.selectedOption}
                />

            </div>
        );
    }
}

export default IndecisionApp;