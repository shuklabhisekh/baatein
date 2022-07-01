import React from "react";
import "../css/home.css";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
