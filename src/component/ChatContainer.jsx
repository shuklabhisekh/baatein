import MoreVert from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import React, { useState } from "react";
import "../css/chatcontainer.css";
import ChatMessage from "./ChatMessage";
import SendIcon from "@mui/icons-material/Send";
import Picker from "emoji-picker-react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
function ChatContainer() {
  const [message, setMessage] = useState("");
  console.log(message);
  const [openEmojibox, setOpenEmojibox] = useState(false);
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
        <ChatMessage
          text={"Hello ,where is my 7th ballond-or"}
          time={"4:00 PM"}
        />
      </div>
      <div className="chat-input">
        {openEmojibox && (
          <Picker
            onEmojiClick={(event, emojiObject) =>
              setMessage(message + emojiObject.emoji)
            }
          />
        )}
        <div className="chat-input-btn">
          <InsertEmoticonIcon onClick={() => setOpenEmojibox(!openEmojibox)} />
          <AttachFileIcon />
        </div>
        <form>
          <input
            type="text"
            value={message}
            placeholder="Type a message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
        <div className="chat-input-btn">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
