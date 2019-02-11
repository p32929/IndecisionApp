import React from 'react';
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className='widget_header'>
            <h3 className='widget_header_title'>Your options</h3>
            <button className='add_options_button button_link'
                    onClick={props.handleDeleteOptions}>Remove All
            </button>
        </div>

        {props.options.length === 0 && <p className='widget_message'>Please add an option to get started</p>}

        {
            props.options.map((option, index) =>
                <Option
                    handleDeleteOption={props.handleDeleteOption}
                    key={option}
                    count={index+1}
                    optionText={option}
                />
            )
        }
    </div>
)

export default Options;
