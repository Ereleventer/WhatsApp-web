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
    console.log("erel")
    //user logged in
    

    const [pictureShow, setShowPic] = useState(false);
    const handleClose = () => setShowPic(false);
    const handleShow = () => setShowPic(true);
    
  return (
  <div className ="sidebar"> 
    <div className="sidebar_header">
        <img src={avatar} className="avatar" />
        <h1>userName</h1>
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
