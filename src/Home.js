import React from "react";
import "./Home.css"
import Sidebar from "./Sidebar";

function Home(){
  return (
    //BEM naming convention
  <div className ="app"> 
    <div className="app_body">
      { /* Sidebar */}
      <Sidebar />
      { /* chat */}
    </div>
  </div>
  );
}

export default Home;
