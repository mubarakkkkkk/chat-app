import React from "react";

function Message({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      <strong>{sender}:</strong> {text}
    </div>
  );
}

export default Message;
