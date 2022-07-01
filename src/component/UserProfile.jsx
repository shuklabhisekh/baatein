import React from "react";
import "../css/userprofile.css";
function UserProfile({name,imageurl}) {
  return (
    <div className="userprofile">
      <div className="userprofile-image">
        <img
          src={imageurl}
          alt=""
        />
      </div>
      <div className="userprofile-info">
        <p className="username">{name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
