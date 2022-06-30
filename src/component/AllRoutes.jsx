import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Home from "./Home";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default AllRoutes;
