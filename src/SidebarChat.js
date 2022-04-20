import React, { useState } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import "./Sidebar";
import contacts from "./data/contacts";

function SidebarChat(props) {
  const [seed, setSeed] = useState("");
  //locate the chat ID by the end of the URL.
  var parts = window.location.href.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
  const getUserName = contacts.find((user) => user.ID == lastSegment);
  const getUser = contacts.find((user) => user.ID === props.ID);

  return (
    /*
      link to the relevant chat ID in order to select the currect chat.
      the sidebar chat only include the contact name and latest message. 
    */
    <Link to={`/chat/${props.ID}`} style={{ textDecoration: "none" }}>
      <div className="sidebarChat">
        <img src={getUser.pic} className="avatarChat" />
        <div className="sidebarChat_info">
          <h2>{getUser.name}</h2>
          <p>{getUser["messages"][getUser["messages"].length-1].content}</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
