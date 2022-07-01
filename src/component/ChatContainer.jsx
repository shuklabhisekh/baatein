import MoreVert from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import React from "react";
import "../css/chatcontainer.css";
import ChatMessage from "./ChatMessage";
function ChatContainer() {
  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi87wa28hkE7g4G7nlfiQ6P1hhSd1TA1zqfw&usqp=CAU"
              alt=""
            />
          </div>
          <p>Messi</p>
        </div>
        <div className="chat-container-header-btn">
          <Search />
          <MoreVert />
        </div>
      </div>
      <div className="chat-display-container">
        <ChatMessage />
      </div>
    </div>
  );
}

export default ChatContainer;
