import React, { useState } from "react";
import "./Sidebar.css";
import avatar from "./pictures/avatar.jpg";
import chatIcon from "./pictures/chat_icon.jpg";
import SidebarChat from "./SidebarChat";
import contacts from "./data/contacts";
import { Registered_Users } from "./localDataBase";
import LoginComponent from "./components/LoginComponent";
import { currentUserLogin } from "./components/LoginComponent";
import { currentUserLoginPic } from "./components/LoginComponent";
import { currentUserLoginNickName } from "./components/LoginComponent";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Alert } from "react-bootstrap";
import { users } from "./data/contacts";
import {messages} from "./data/newContantMessages"


function Sidebar() {
 

  //handle popup of create new chat
  const [pictureShow, setShowPic] = useState(false);
  const handleClose = () => setShowPic(false);
  const handleShow = () => setShowPic(true);
  const [newContact, setNewContact] = React.useState("");
  const ID = users[users.length-1].ID + 1;
  const last_seen = "online";
  const [onErorrUsername, setOnErrorUsername] = React.useState(false);

  const handleNewChat = () =>{
    const getUser = Registered_Users.find((user) => user.nickname === newContact);
    const pic = getUser.pic;
    const name = getUser.nickname; 
    const getUserfromContacts = users.find((user) => user.name === newContact);
    if (getUserfromContacts) {
      setOnErrorUsername(true);
      return;
    }
    console.log("###########");
    console.log(getUserfromContacts);
    console.log("###########");
    console.log({ ID,name,pic,last_seen,messages })
    users.push({ ID,name,pic,last_seen,messages });
    setShowPic(false);
  }


  const returnAlertErrorUsername = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => setOnErrorUsername(false)}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "10px" }}>
          Chat Already exist! choose another contact.
        </Alert.Heading>
      </Alert>
    );
  };

  const getUserFilter = Registered_Users.find((user) => user.nickname === currentUserLoginNickName);


  return (

    /*
      header - includes the username and pic that logged into our app (need to add connection between login page and this data)
      LoggedInUser should be replaced with the logged in username.
      avatar should be replaced with the pic of the user.

       className="sidebar_headerRight" - is the add chat option.

        className="sidebar_chats"> is including all the chats that are in the code - 
        we need to figure out how to add new chats there.
      */
    <div className="sidebar">
      <div className="sidebar_header">
        <img src={currentUserLoginPic} className="avatar" />
        <h1> Hello {currentUserLoginNickName}!</h1>
        <div className="sidebar_headerRight">
          <button
            onClick={handleShow}
            data-toggle="tooltip"
            data-placement="top"
            title="Create a New Chat"
            className="chatIconButton"
          >
            <img src={chatIcon} className="chatIcon" />
          </button>
        </div>
      </div>
      <div className="sidebar_chats">
      {users.map((users) => {
          return (
        <SidebarChat ID={users.ID} />
        );
      })}
      </div>

      <Modal className="new_chat" show={pictureShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="new_chat_body"><p>Select the Contact Name</p></Form.Label>
            <Form.Control as="select" 
             value={newContact}
             onChange={(e) => setNewContact(e.target.value)}
              >
                {
                Registered_Users.filter(Registered_Users => Registered_Users.nickname !== getUserFilter.nickname)
                .map((Registered_Users) => {
                return (
                  <option>{Registered_Users.nickname}</option>
               );
              })}
            </Form.Control>
            {onErorrUsername && returnAlertErrorUsername()}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNewChat}>
            Add contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
