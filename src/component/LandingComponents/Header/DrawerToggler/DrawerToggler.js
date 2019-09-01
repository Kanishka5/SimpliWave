import React from 'react';
import './DrawerToggler.css';

const DrawerToggler = props => (
    <div className={'DrawerToggler'} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggler;