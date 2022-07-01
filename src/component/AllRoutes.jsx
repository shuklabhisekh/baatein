import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Home from "./Home";
import Login from "./Login";
function AllRoutes() {
  const [user, setUser] = useState("");
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      ) : (
        <Login />
      )}
    </>
  );
}

export default AllRoutes;
