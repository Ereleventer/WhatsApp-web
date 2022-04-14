import React, {useState} from "react";
import "./SidebarChat.css"
import avatar from "./pictures/pic2-woman.jpg";
import { useRoutes } from "react-router";
import { Link } from "react-router-dom";
import "./Sidebar"
import contacts from "./data/contacts";
import pic1 from "./pictures/pic1-male.jpg";
import pic2 from "./pictures/pic2-male.jpg";
import pic3 from "./pictures/pic2-woman.jpg";
import pic4 from "./pictures/pic4-woman.jpg";


function SidebarChat (props){
    const [seed,setSeed] = useState("");
 //   console.log(props.ID);
 
    var parts = window.location.href.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

    console.log(lastSegment);
    const getUserName = contacts.find((user) => user.ID == lastSegment);

    const getUser = contacts.find((user) => user.ID === props.ID);
 //   console.log(getUser.name);

  return (
      <Link to ={`./${props.ID}`} style={{ textDecoration: 'none' }}>
  
      <div className="sidebarChat">
           <img src={getUser.pic} className="avatarChat" />
           <div className="sidebarChat_info">
                <h2>{getUser.name}</h2>
                    <p>{getUser.message}</p>
           </div>
  </div>
  </Link>
  );
}

export default SidebarChat;
