import React from 'react';
import './Chat.css'
import Group from "./Group/Group";
import ChatImage from '../../../../assets/image/undraw_Group_chat_unwm.svg';

const Chat = props => {
    return (
        <div className={'Chat'}>
            <h2>Chat with your group</h2>
            <Group/>
            <div className={'ImageDiv'}>
                <img className={'ChatImage'} src={ChatImage} alt={'ChatImage'}/>
            </div>
        </div>
    )
};

export default Chat;