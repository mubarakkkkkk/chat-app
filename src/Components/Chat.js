import React from "react";
import Message from "./Messages";
import "../App.css"

function Chat({ messages }) {
  return (
    <div className="chat">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

export default Chat;
