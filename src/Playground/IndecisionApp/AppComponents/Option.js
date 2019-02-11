import React from 'react';

const Option = (props) => (
    <div>
        <p>{props.optionText}</p>
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
