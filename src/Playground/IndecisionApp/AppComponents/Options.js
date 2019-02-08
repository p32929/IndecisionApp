import React from 'react';
import Option from "./Option";

const Options = (props) => (
    <div>

        {props.options.length === 0 && <p>Please add an option to get started</p>}

        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
            props.options.map(option =>
                <Option
                    handleDeleteOption={props.handleDeleteOption}
                    key={option}
                    optionText={option}
                />
            )
        }
    </div>
)

export default Options;
