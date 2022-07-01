import React from "react";
import "../css/chatmessage.css";
function ChatMessage({ text, time }) {
  return (
    <div className="chat-message">
      <div className="chat-message-text">{text}</div>
      <div className="chat-message-date">{time}</div>
    </div>
  );
}

export default ChatMessage;
