import React from 'react';
import './Packages.css';
import Package from "./Package/Package";
import Zoom from '../../../UI/Zoom/Zoom';

const Packages = props => {
    const [packages, setPackages] = React.useState({
        gold: {
            name: 'Gold',
            price: 3000,
            description: 'This is Gold Package'
        },
        silver: {
            name: 'Silver',
            price: 2000,
            description: 'This is Silver Package'
        },
        bronze: {
            name: 'Bronze',
            price: 1000,
            description: 'This is Bronze Package'
        }
    });

    let packageList = [];

    for (let i in packages) {
        packageList.push(
            <Package
                id={i}
                name={packages[i].name}
                price={packages[i].price}
                description={packages[i].description}
            />
        )
    }

    return (
        <div className={'Packages'}>
            <Zoom duration={'300'} trigger={'onEnter'}>
                <p className={'PackagesHeader'}>
                    Purchase a <span>Package</span><br/>
                    to Order a project or ad an Internship
                </p>
            </Zoom>
            <div className={'packageList'}>
                {packageList}
            </div>
        </div>
    );
};

export default Packages;