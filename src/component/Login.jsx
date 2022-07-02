import React from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import db, { auth, googleProvider } from "../firebase";
function Login({ setUser }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img src="./whatsapp-logo.png" className="login-logo" alt="" />
        <p className="login-name">WhatsApp Web</p>
        <button className="login-btn" onClick={() => signInWithGoogle()}>
          <img src="./google-logo.png" alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
