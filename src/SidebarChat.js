import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import "./Sidebar";
import contacts from "./data/contacts";
import Chat from "./Chat";
import { currentUserLoginNickName } from "./components/LoginComponent";

// function displayMessage() {
//   const message = getUser["messages"][getUser["messages"].length - 1].content;
//   return message;
// }

function SidebarChat(props) {

  const [list,setList] = useState([]);

  //should change HERE!!! TO ANOTHER RESPONSE!
  useEffect(async () => {
  const add = "?currentId="
  //should change to the current user 
  const userName = currentUserLoginNickName;
  const contactname= "/" + props.name;
  const apiUrl = "https://localhost:7061/contacts" +contactname +add + userName;
  const res = fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => 
    setList(data));
   console.log('This is yourfcfdfsddfs data', list);
}, []);

  //locate the chat ID by the end of the URL.
  var parts = window.location.href.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
  const getUserName = contacts.find((user) => user.ID == lastSegment);
  const getUser = contacts.find((user) => user.ID === props.ID);
  // console.log("##########44444444444441!!!!!!!########");
  // console.log(list);
  // console.log("#########1444444444444444!!!!!!#########");
  // console.log("props:" + props.ID);
  const uuser = list[props.ID];
  // console.log("##########1erel!!!!!!!########");
  // console.log(uuser);
  // console.log("#########1!!erel!!!!#########");
  const latestMesasge = getUser["messages"][getUser["messages"].length - 1];
  return (
    /*
      link to the relevant chat ID in order to select the currect chat.
      the sidebar chat only include the contact name and latest message. 
    */
    <Link to={`/chat/${props.ID}`} style={{ textDecoration: "none" }}>
      <div className="sidebarChat">
        <img src={getUser.pic} className="avatarChat" />
        <div className="sidebarChat_info">
        {/* {list[props.ID].map((value) => {
            console.log(value);
            return <div><h2>{value.id}</h2></div>;
          })} */}
          <h2>{props.name}</h2>
          {/* <p>{latestMesasge.content}</p> */}
          <p>{list.last}</p>
          <p1>{list.lastdate}</p1>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
