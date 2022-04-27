import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Home() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
