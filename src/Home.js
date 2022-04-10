import React from "react";
import "./Home.css"
import Sidebar from "./Sidebar";
import Chat from "./Chat"

function Home(){
  return (
    //BEM naming convention
  <div className ="app"> 
    <div className="app_body">
      { /* Sidebar */}
      <Sidebar />
      { /* chat */}
      <Chat />
    </div>
  </div>
  );
}

export default Home;
