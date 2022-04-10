import React from "react";
import "./Sidebar.css"
import avatar from "./pictures/avatar.jpg";
import chatIcon from "./pictures/chat_icon.jpg";
import SidebarChat from "./SidebarChat";


function Sidebar(){
  return (
  <div className ="sidebar"> 
    <div className="sidebar_header">
        <img src={avatar} className="avatar" />
        <div className="sidebar_headerRight">
            <button data-toggle="tooltip" data-placement="top" title="Create a New Chat" className="chatIconButton"><img src={chatIcon} className="chatIcon" /></button>

        </div>
    </div>
    <div className="sidebar_chats">
        <SidebarChat/>
    </div>
  </div>
  );
}

export default Sidebar;
