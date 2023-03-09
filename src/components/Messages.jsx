import React from "react";
import randomId from "random-id";

function Messages(props) {

  const { messages, currentMember } = props;
 
  function generateId () {
    const randomId = require('random-id');
    const len = 30;
    const pattern = "aA0";
    const key = randomId(len, pattern)
    return key;
  }

  function renderMessage(message) {
    const { member, text } = message;
    const keyId=generateId();
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (

      <li key={keyId} className={className}>
        <span>
          <img className="avatar-image" src={member.clientData.avatar} alt="" />
        </span>
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text" style={{ backgroundColor: member.clientData.color }} >{text}</div>
        </div>
      </li>
    );
  }

  return <ul className="Messages-list">{messages.map(renderMessage)}</ul>;
}

export default Messages;