import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "../firebase";
import ChatPage from "./ChatPage";
import Home from "./Home";
import Login from "./Login";
function AllRoutes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:emailId" element={<ChatPage />} />
        </Routes>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default AllRoutes;
