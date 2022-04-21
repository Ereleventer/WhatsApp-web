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

function Sidebar() {
  const ID = contacts.ID;
  const name = contacts.name;
  //user logged in

  //handle popup of create new chat
  const [pictureShow, setShowPic] = useState(false);
  const handleClose = () => setShowPic(false);
  const handleShow = () => setShowPic(true);
  const [newContact, setNewContact] = useState("");
  const [onErorrContact, setOnErrorContact] = React.useState(false);

  function addNewContact(event) {
    event.preventDefault();
    //getUser is the user that match to the newContact that added. if there is no match getUser will be null
    const getUser = Registered_Users.find((user) => user.username === newContact);
    if (newContact === "" || getUser === null) {
      setOnErrorContact(true);
    }
  }
  var parts = window.location.href.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

  const getCurrentUser = contacts.find((user) => user.ID == lastSegment);

  const hideMe = id => currentUserLoginNickName
  const [hidden, hiddenSet] = useState([]);

  function createNewChatttt (chat_name){
    console.log(chat_name)
  }


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
        <h1>{currentUserLoginNickName}</h1>
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

      <Modal show={pictureShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Type the Contact Name</Form.Label>
            <Form.Select aria-label="Default select example" value={createNewChatttt}>
              <option>Open this select menu</option>
              {Registered_Users.map((Registered_Users) => {
                return (
                  <option value="1">{Registered_Users.nickname}</option>
               );
              })}

              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
            </Form.Select>

          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewContact}>
            Add contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
