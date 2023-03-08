import React from "react";

function Messages(props) {

 

  const { messages, currentMember } = props;
  console.log('msg:',messages)
  console.log('mmbr:',currentMember)
  

  function renderMessage(message) {
    const { member, text } = message;
    console.log('MEMBER:',member)

    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li key={message.id} className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
           <div className="username">{member.clientData.username}</div> 
          <div className="text">{text}</div> 
        </div>
      </li>
    );
  }

  return <ul className="Messages-list">{messages.map(renderMessage)}</ul>;
}

export default Messages;