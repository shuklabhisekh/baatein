import React from "react";
import "../css/login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <img src="./whatsapp-logo.png" alt="" />
        <p className="login-name">WhatsApp Web</p>
        <button className="login-btn">
          <img src="./google-logo.png" alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
