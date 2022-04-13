import React, {useState} from "react";
import "./Chat.css"
import chatAvatar from "./pictures/pic2-woman.jpg";
import fileIcon from "./pictures/file_icon.png";
import pictureIcon from "./pictures/photo_icon.png";
import videoIcon from "./pictures/video_icon.png";
import soundIcon from "./pictures/sound_icon.png";
import locationIcon from "./pictures/location_icon.png";

import { useParams } from "react-router";
import contacts from "./data/contacts";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function Chat(){
   
    
    const {roomId} = useParams();
    const {chatName, setChatName} = useState("");
    const [input,setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you Typed >>",input);
        contacts.message.push(input);
        console.log(contacts.message);
    };


    var parts = window.location.href.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

    console.log(lastSegment);
    const getUser = contacts.find((user) => user.ID == lastSegment);
    console.log(getUser.name);
    console.log(getUser.messages.content);


  return (
  <div className ="chat"> 
     <div className="chat_header">
         <img src={chatAvatar} className="chatAvatar" />
         <div className="chat_headerInfo">
             <h3> {getUser.name} </h3>
         </div>
        
        
         <div className="chat_headerRight">

         </div>
     </div>
     <div className="chat_body">
         <p className={`chat_message ${true &&
         "chat_reciever"}`}>
           
             <span className="chat_name">Erel

             </span>
             {getUser.message}
             <span className="chat_timestamp">
             20:52pm
         </span>
         </p>
      
        
    </div>
    <div className="chat_footer">
            <div className="drop_down"  style={{border: "none", textAlign: "center", display:"flex"}} >   
                <DropdownButton 
                id="dropdown-basic-button" 
                variant=""
                drop='up'
                title={<img src={fileIcon} width={"25px"} height={"30px"}/>}
                >
                <Dropdown.Item style={{border: "none",width:"150px", textAlign: "left"}}>   
                   <img src={pictureIcon}  width={"20px"} height={"20px"} /> Add Picture
                </Dropdown.Item>
            
                <Dropdown.Item style={{border: "none",width:"150px", textAlign: "left"}}>   
                    <img src={videoIcon} width={"20px"} height={"20px"} textAlign={"left"} /> Add Video
                </Dropdown.Item>
                <Dropdown.Item style={{border: "none",width:"150px", textAlign: "left"}}>   
                   <img src={soundIcon}  width={"20px"} height={"20px"} /> Record Audio
                </Dropdown.Item>
                <Dropdown.Item style={{border: "none",width:"150px", textAlign: "left"}}>   
                   <img src={locationIcon}  width={"20px"} height={"20px"} /> Add Location
                </Dropdown.Item>
                </DropdownButton>
            </div>
            <form>
                <input value={input} onChange={e=>
                setInput(e.target.value)}
                placeholder="Type a message..."
                type="text"/>
                <button onClick={sendMessage} type ="submit"> Send</button>
            </form>
    </div>
  </div>
  );
}

export default Chat;
