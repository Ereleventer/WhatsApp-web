import React, {useState} from "react";
import "./SidebarChat.css"
import avatar from "./pictures/pic2-woman.jpg";
import { useRoutes } from "react-router";

function SidebarChat({addNewChat}){
    const [seed,setSeed] = useState("");
 

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
