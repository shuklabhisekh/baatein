import React from "react";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../css/sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img
            src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
            alt=""
          />
          <div className="sidebar-header-btn">
            <TollIcon />
            <InsertCommentIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
