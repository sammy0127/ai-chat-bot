/* eslint-disable react/prop-types */
import React from 'react';
import './chat-bot-start.css';

const ChatBotStart = ({onStartChat}) => {
    return (

        <div className='start-page'>
            <button className='start-page-btn'
            onClick = {onStartChat}
            >CHAT AI</button>
        </div>

    )
}

export default ChatBotStart;