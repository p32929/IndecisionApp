import React, {Component} from 'react';
import Header from "./AppComponents/Header";
import Action from "./AppComponents/Action";
import Options from "./AppComponents/Options";
import AddOptions from "./AppComponents/AddOptions";

class IndecisionApp extends Component {
    render() {

        var title = "Indecision App"
        var subtitle = "a subtitle"
        var options = ["Option 1", "Option 2", "Option 4"]

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOptions/>
            </div>
        );
    }
}

export default IndecisionApp;