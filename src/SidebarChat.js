import React, {useState} from "react";
import "./SidebarChat.css"
import avatar from "./pictures/pic2-woman.jpg";
import { useRoutes } from "react-router";
import { Link } from "react-router-dom";
import "./Sidebar"

function SidebarChat (props){
    const [seed,setSeed] = useState("");
    console.log(props.ID);
 

  return (
      <Link to ={`./${props.ID}`}>
  
      <div className="sidebarChat">
           <img src={avatar} className="avatarChat" />
           <div className="sidebarChat_info">
                <h2>Erel Leventer</h2>
                    <p>Last message....</p>
           </div>
  </div>
  </Link>
  );
}

export default SidebarChat;
