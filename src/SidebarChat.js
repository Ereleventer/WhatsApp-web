import React, {useState} from "react";
import "./SidebarChat.css"
import avatar from "./pictures/pic2-woman.jpg";
import { useRoutes } from "react-router";
import { Link } from "react-router-dom";
import "./Sidebar"
import contacts from "./data/contacts";



function SidebarChat (props){
    const [seed,setSeed] = useState("");
    console.log(props.ID);
 

    const getUser = contacts.find((user) => user.ID === props.ID);
    console.log(getUser.name);

  return (
      <Link to ={`./${props.ID}`}>
  
      <div className="sidebarChat">
           <img src={avatar} className="avatarChat" />
           <div className="sidebarChat_info">
                <h2>{getUser.name}</h2>
                    <p>Last message....</p>
           </div>
  </div>
  </Link>
  );
}

export default SidebarChat;
