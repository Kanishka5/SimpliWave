import React from 'react';
import './Footer.css';
import List from "./List/List";

const Footer = props => {
    return (
        <div>
            <footer className={'Footer01'}>
                <div className={'Name'}>SimpliWave
                    <p><strong>VISIT US</strong><br/>3rd floor, 738 Diamond Harbour Road, Kolkata - 700008</p>
                    <p><strong>CALL US</strong><br/>+918870682063</p>
                    <p><strong>CONTACT US</strong><br/>{' '}info@simpliwave.co<br/>{' '}helpline@simpliwave.co</p>
                </div>
                <div className={'Table'}><List/></div>
            </footer>
            <footer className={'Footer02'}>
                <div>© 2019 SimpliWave</div>
            </footer>
        </div>
    );
};

export default Footer;