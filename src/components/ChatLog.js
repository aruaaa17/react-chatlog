import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
    const {entries} = props;
    const messageLog = entries.map((message, index) => (
        <ChatEntry
            key={index}
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            updateMessage={props.updateMessage}
        />)
    )
    return (
        <section>{messageLog}</section>
    )
}

export default ChatLog;