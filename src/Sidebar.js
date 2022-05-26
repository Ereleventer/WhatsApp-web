import React, { useState,useEffect } from "react";
import "./Sidebar.css";
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
  const [list,setList] = useState([]);

  useEffect(async () => {
  const add = "?id="
  //should change to the current user 
  const userName = currentUserLoginNickName;
  const apiUrl = "https://localhost:7061/contacts" +add + userName;
  const res = fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => 
    setList(data));
  //  console.log('This is yourfcfdfsddfs data', list);
}, []);


// useEffect(async () => {
  
//   const res =
//   //  await
//    fetch('https://localhost:7061/WeatherForecast', {
//     // method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     // headers: {
//     //   'Content-Type': 'application/json'
//     //   // 'Content-Type': 'application/x-www-form-urlencoded',
//     // },
//     // redirect: 'follow', // manual, *follow, error
//     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify({"id": currentUserLoginNickName}) // body data type must match "Content-Type" header
//   });
//   const data = 
//   // await 
//   res.json();
//   setList(data);
//   console.log(data);

// }, [setList]);
// console.log('#####################');
// console.log(list);
// console.log('#####################');

  //handle popup of create new chat
  const [pictureShow, setShowPic] = useState(false);
  const handleClose = () => setShowPic(false);
  const handleShow = () => setShowPic(true);
  const [newContact, setNewContact] = React.useState("");
  const ID = users[users.length - 1].ID + 1;
  const last_seen = "online";
  const [onErorrUsername, setOnErrorUsername] = React.useState(false);

  const handleNewChat = () => {

    const getUser = Registered_Users.find(
      (user) => user.nickname === newContact
    );
    console.log("$$$$$$$$$$$$$$$$$");
    console.log(getUser);
    console.log("$$$$$$$$$$$$$$$$$");
    if (getUser == undefined){
      setOnErrorUsername(true);
      return;
    }
    const pic = getUser.pic;
    const name = getUser.nickname;
    const getUserfromContacts = users.find((user) => user.name === newContact);
    if (getUserfromContacts) {
      setOnErrorUsername(true);
      return;
    }
   
    var messages = [
      {
        content: "Hi i'm " + name,
        sender: name,
        time: "20:12",
        type: "text", 
      },
      {
        content: "nice to meet you!",
        sender: name,
        time: "23:50",
        type: "text",
      }
  ]
      // users.push({ ID, name, pic, last_seen, messages });
      
      
        //invitation - need to change the address
        const apiUrlinv = "https://localhost:7061/contacts";
        console.log("api_url:" + apiUrlinv);
        const resINV = fetch(apiUrlinv,{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify({'from': currentUserLogin, 'to' : name, 'server' : 'localhost'}) // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then(text => {
            try {
              const apiUrl = "https://localhost:7061/contacts";
              console.log("api_url:" + apiUrl);
              const res = fetch(apiUrl,{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify({'id': currentUserLogin, 'to' : name, 'server' : 'localhost'}) // body data type must match "Content-Type" header
              })
        .then((response) => response.json());
            } catch(err) {
              // The response wasn't a JSON object
              // Do your text handling here
            }
          });


    setShowPic(false);
  };

  const returnAlertErrorUsername = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => setOnErrorUsername(false)}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "10px" }}>
          Error! Chat Already exist or you entered wrong data!
        </Alert.Heading>
      </Alert>
    );
  };

  const getUserFilter = Registered_Users.find(
    (user) => user.nickname === currentUserLoginNickName
  );

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        {/* <img src={currentUserLoginPic} className="avatar" /> */}

        <div className="sidebar_headerRight">
          <h1> Welcome {currentUserLoginNickName}</h1>
          {/* <h1>hiiiii</h1> */}
          {/* {list.map((value) => {
            console.log(value);
            return <div><h1>{value.id}</h1></div>;
          })} */}
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
        {getUserFilter.isNew === false ? <div>
          {
            list
          // users
          //  .filter(
          //       (users) =>
          //       users.ID != 0
          //     )
              .map((value, index) => {
          return <SidebarChat ID={index} name={value.id} />;
          
        })}
        </div> :
        <div>
           {users
           .filter(
                (users) =>
                users.ID > 5
              )
              .map((users) => {
                return <SidebarChat ID={users.ID} />;
              })}

        </div>
        }
      </div>

      <Modal className="new_chat" show={pictureShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="new_chat_body">
              <p>Type the Contact Nickname</p>
            </Form.Label>
            <Form.Control
              type="text"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
            >
              {/* {Registered_Users.filter(
                (Registered_Users) =>
                  Registered_Users.nickname !== getUserFilter.nickname
              ).map((Registered_Users) => {
                return <option>{Registered_Users.nickname}</option>;
              })} */}
            </Form.Control>
            {onErorrUsername && returnAlertErrorUsername()}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="new_chat_body">
              <p>Type the Contact UserName</p>
            </Form.Label>
            <Form.Control
              type="text"
              // value={newContact}
              // onChange={(e) => setNewContact(e.target.value)}
            >
              {/* {Registered_Users.filter(
                (Registered_Users) =>
                  Registered_Users.nickname !== getUserFilter.nickname
              ).map((Registered_Users) => {
                return <option>{Registered_Users.nickname}</option>;
              })} */}
            </Form.Control>
            {/* {onErorrUsername && returnAlertErrorUsername()} */}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="new_chat_body">
              <p>Type the Contact Address</p>
            </Form.Label>
            <Form.Control
              type="text"
              // value={newContact}
              // onChange={(e) => setNewContact(e.target.value)}
            >
              {/* {Registered_Users.filter(
                (Registered_Users) =>
                  Registered_Users.nickname !== getUserFilter.nickname
              ).map((Registered_Users) => {
                return <option>{Registered_Users.nickname}</option>;
              })} */}
            </Form.Control>
            {/* {onErorrUsername && returnAlertErrorUsername()} */}
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
