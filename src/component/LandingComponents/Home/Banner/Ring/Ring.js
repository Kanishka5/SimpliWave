import React from 'react';
import './Ring.css';
import ring1 from '../../../../../assets/image/ring1.svg';
import ring2 from '../../../../../assets/image/ring2.svg';
import ring3 from '../../../../../assets/image/ring3.svg';
import ring4 from '../../../../../assets/image/ring4.svg';
import ring5 from '../../../../../assets/image/ring5.svg';
import logo from "../../../../../assets/image/logo.png";

const Ring = props => (
    <div className={'Ring'}>
        <img className='ring1' src={ring1} alt='logo' />
        <img className='ring2' src={ring2} alt='logo' />
        <img className='ring3' src={ring3} alt='logo' />
        <img className='ring4' src={ring4} alt='logo' />
        <img className='ring5' src={ring5} alt='logo' />

        <img src={logo} alt='logo' style={{ height: "70%", width: "70%"}} />
    </div>
);

export default Ring;