import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../css/userprofile.css";
function UserProfile({ name, imageurl, email }) {
  const navigate = useNavigate();
  const goToUser = (emailId) => {
    if (emailId) {
      navigate(`/${emailId}`);
    }
  };
  return (
    <div className="userprofile" onClick={() => goToUser(email)}>
      <div className="userprofile-image">
        <img src={imageurl} alt="" />
      </div>
      <div className="userprofile-info">
        <p className="username">{name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
