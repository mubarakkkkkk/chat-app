import React, { useState } from "react";
import Chat from "./Components/Chat";
import MessageInput from "./Components/MessageInput";
import "./App.css"

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: "User" }]);
  };

  return (
    <div className="App">
      <h1>React Chat App</h1>
      <Chat messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
