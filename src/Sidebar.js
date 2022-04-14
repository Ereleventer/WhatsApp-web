import React, {useState} from "react";
import "./Sidebar.css"
import avatar from "./pictures/avatar.jpg";
import chatIcon from "./pictures/chat_icon.jpg";
import SidebarChat from "./SidebarChat";
import contacts from "./data/contacts";
import Users from "./localDataBase"
import LoginComponent from "./components/LoginComponent"


function Sidebar(){
    const ID = contacts.ID;
    const name = contacts.name;
    console.log("erel")
    //user logged in
    

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
        <h1>userName</h1>
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
