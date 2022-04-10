import React, {useState} from "react";
import "./Chat.css"
import chatAvatar from "./pictures/pic2-woman.jpg";
import fileIcon from "./pictures/add_file_icon.jpg";

function Chat(){

    const [input,setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you Typed >>",input);
    };

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
         <p className={`chat_message ${true &&
         "chat_reciever"}`}>
           
             <span className="chat_name">Erel

             </span>
             HIIIIIII!
             <span className="chat_timestamp">
             20:52pm
         </span>
         </p>
      
        
    </div>
    <div className="chat_footer">
          <button data-toggle="tooltip" data-placement="top" 
          title="Create a New Chat" className="chatIconButton">
              <img src={fileIcon} className="fileIconButton" />
            </button>
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
