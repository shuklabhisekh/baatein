import React from "react";
import "../css/chatpage.css";
import ChatContainer from "./ChatContainer";
import Sidebar from "./Sidebar";

function ChatPage() {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        <Sidebar /> 
        <ChatContainer />
      </div>
    </div>
  );
}

export default ChatPage;
