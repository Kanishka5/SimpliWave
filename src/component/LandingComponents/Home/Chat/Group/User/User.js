import React from 'react';
import './User.css';

const User = props => (
    <div className={'User'} style={{backgroundColor: props.color}}>
        {props.children}
    </div>
);

export default User;