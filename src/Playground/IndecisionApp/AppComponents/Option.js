import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option_text'>{props.count}. {props.optionText}</p>
        <button
            className='add_options_button button_link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
            Remove
        </button>
    </div>
)

export default Option;
