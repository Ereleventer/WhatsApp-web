import React from "react";
import "./Sidebar.css"
import avatar from "./pictures/avatar.jpg";
import chatIcon from "./pictures/chat_icon.jpg";
import SidebarChat from "./SidebarChat";


function Sidebar(){

    const userID=0;
    console.log(userID);
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            // login to add new chat
        }
    };


  return (
  <div className ="sidebar"> 
    <div className="sidebar_header">
        <img src={avatar} className="avatar" />
        <div className="sidebar_headerRight">
            <button onClick={createChat} data-toggle="tooltip" data-placement="top" title="Create a New Chat" className="chatIconButton"><img src={chatIcon} className="chatIcon" /></button>

        </div>
    </div>
    <div className="sidebar_chats">
        <SidebarChat ID={1} />
        <SidebarChat ID={2}/>
        <SidebarChat ID={3}/>

    </div>
  </div>
  );
}

export default Sidebar;
