import React from "react";
import "./Main.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";

const Main = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="left-column">
        <Sidebar />
      </div>
      <div className="right-column">ddbf</div>
    </React.Fragment>
  );
};

export default Main;
