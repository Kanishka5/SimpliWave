import React from 'react';
import './ListItem.css';
import Zoom from "../../../../../UI/Zoom/Zoom";

const ListItem = props => (
    <Zoom duration={'120'} trigger={'0.85'}>
        <div className={'ListItem'}>
            <div className={'Item'}>{props.children}</div>
            <div className={'ItemImage'}>
                <img src={props.image} alt={'pop'}/>
            </div>
        </div>
    </Zoom>
);

export default ListItem;