import React from "react";
import "./SidebarChat.css"
import avatar from "./pictures/avatar.jpg";


function SidebarChat(){
  return (
      <div className="sidebarChat">
           <img src={avatar} className="avatarChat" />
           <div className="sidebarChat_info">
                <h2>Erel Leventer</h2>
                    <p>Last message....</p>
           </div>
  </div>
  );
}

export default SidebarChat;
