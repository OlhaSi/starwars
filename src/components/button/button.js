import React from 'react';

import './button.css';

const Button = (props) => (
    <div>
        <button type="button" className='btn' onClick={() => props.onClick()}>
            Next
        </button>
    </div>
);

export default Button;
