import MoreVert from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import "../css/chatcontainer.css";
import ChatMessage from "./ChatMessage";
import SendIcon from "@mui/icons-material/Send";
import Picker from "emoji-picker-react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../firebase";
function ChatContainer() {
  const [message, setMessage] = useState("");
  const { emailId } = useParams();
  const [openEmojibox, setOpenEmojibox] = useState(false);
  const [chatuser, setChatuser] = useState({});
  useEffect(() => {
    const getAlluser = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        snapshot.docs.filter((doc) => {
          if (doc.data().email === emailId) {
            setChatuser(doc.data());
          }
        });
      });
    };
    getAlluser();
    // getMessages();
  }, [emailId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (emailId) {
      let payload = {
        text: message,
      };
    }
  };
  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img src={chatuser?.photoURL} alt="" />
          </div>
          <p>{chatuser?.fullname}</p>
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
