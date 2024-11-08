import React from "react";
import "../App.css"

function Message({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      <strong>{sender}:</strong> {text}
    </div>
  );
}

export default Message;
