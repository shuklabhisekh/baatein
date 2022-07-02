import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Home from "./Home";
import Login from "./Login";
function AllRoutes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home currentUser={user} />} />
          <Route path="/chat" element={<ChatPage currentUser={user} />} />
        </Routes>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default AllRoutes;
