import React from 'react';
import './RadioButton.css';

const RadioButton = props => (
    <label className={'radioContainer'}>{props.label}
        <input type={'radio'} value={props.value} onChange={props.onChange} checked={props.checked}/>
        <span className={'circle'}></span>
    </label>
);

export default RadioButton;