import React from "react";
import "./Chat.css"
import chatAvatar from "./pictures/pic2-woman.jpg";

function Chat(){
  return (
  <div className ="chat"> 
     <div className="chat_header">
         <img src={chatAvatar} className="chatAvatar" />
         <div className="chat_headerInfo">
             <h3> Contact Name </h3>
         </div>
        
        
         <div className="chat_headerRight">

         </div>
     </div>
     <div className="chat_body">
         
    </div>
    <div className="chat_footer">
         
    </div>
  </div>
  );
}

export default Chat;
