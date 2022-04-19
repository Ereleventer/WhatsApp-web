import React, {useState} from "react";
import "./Sidebar.css"
import avatar from "./pictures/avatar.jpg";
import chatIcon from "./pictures/chat_icon.jpg";
import SidebarChat from "./SidebarChat";
import contacts from "./data/contacts";
import Users from "./localDataBase"
import LoginComponent from "./components/LoginComponent"
import Modal from 'react-bootstrap/Modal'
import { Form, Button, Alert } from "react-bootstrap";


function Sidebar(){
    const ID = contacts.ID;
    const name = contacts.name;
    //user logged in
    
    //handle popup of create new chat
    const [pictureShow, setShowPic] = useState(false);
    const handleClose = () => setShowPic(false);
    const handleShow = () => setShowPic(true);
    
  return (
      /*
      header - includes the username and pic that logged into our app (need to add connection between login page and this data)
      LoggedInUser should be replaced with the logged in username.
      avatar should be replaced with the pic of the user.

       className="sidebar_headerRight" - is the add chat option.

        className="sidebar_chats"> is including all the chats that are in the code - 
        we need to figure out how to add new chats there.
      */
  <div className ="sidebar"> 
    <div className="sidebar_header">
        <img src={avatar} className="avatar" />
        <h1>LoggedInUser</h1>
        <div className="sidebar_headerRight">
            <button onClick={handleShow} data-toggle="tooltip" data-placement="top" title="Create a New Chat" className="chatIconButton"><img src={chatIcon} className="chatIcon" /></button>

        </div>
    </div>
    <div className="sidebar_chats">
        <SidebarChat ID={1} />
        <SidebarChat ID={2}/>
        <SidebarChat ID={3}/>
        <SidebarChat ID={4}/>
        <SidebarChat ID={5}/>
    </div>

    <Modal show={pictureShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>  Add New Chat 
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Type the Contact Name</Form.Label>
                            <Form.Control type="type"  multiple accept="image/*" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
  </div>
  );
}

export default Sidebar;
