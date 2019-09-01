import React from 'react';
import './Facilities.css';
import Slide from "../../../UI/Slide/Slide";
import ListItems from "./ListItems/ListItems";
import manage from "../../../../assets/image/undraw_online_organizer_ofxm.svg";

const Facilities = props => {
    return (
        <div className={'Facilities'}>
            <div className={'Image'}>
                <Slide from={'left'} duration={'350'}>
                    <img src={manage} className={'Manage'} alt={'Manage Slide'}/>
                </Slide>
            </div>
            <div className={'List'}>
                <ListItems/>
            </div>
        </div>
    );
};

export default Facilities;