import React from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
// import db, { auth, googleProvider } from "../firebase";
function Login({ setUser }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    console.log("clicked");
    // auth
    //   .signInWithPopup(googleProvider)
    //   .then((res) => {
    //     const newUser = {
    //       fullname: res.user.displayName,
    //       email: res.user.email,
    //       photoURL: res.user.photoURL,
    //     };
    //     navigate("/");
    //     setUser(newUser);
    //     db.collection("users").doc(res.user.email).set(newUser);
    //   })
    //   .catch((err) => alert(err));
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
