import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import chatAvatar from "./pictures/pic2-woman.jpg";
import fileIcon from "./pictures/file_icon.png";
import pictureIcon from "./pictures/photo_icon.png";
import videoIcon from "./pictures/video_icon.png";
import soundIcon from "./pictures/sound_icon.png";
import locationIcon from "./pictures/location_icon.png";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { useLocation } from "react-router";
import contacts from "./data/contacts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { Registered_Users } from "./localDataBase";
import { users } from "./data/contacts";
import useRecorder from "./useRecorder";


function Chat() {
  //handle popup windows - all dropdown options (picture,video,voice and location)
  const [pictureShow, setShowPic] = useState(false);
  const handleClose = () => setShowPic(false);
  const handleShow = () => setShowPic(true);
  const [videoShow, setShowVideo] = useState(false);
  const handleCloseVid = () => setShowVideo(false);
  const handleShowVid = () => setShowVideo(true);
  const [voiceShow, setShowVoice] = useState(false);
  const handleCloseVoice = () => setShowVoice(false);
  const handleShowVoice = () => setShowVoice(true);
  const [locationShow, setShowLocation] = useState(false);
  const handleCloseLo = () => setShowLocation(false);
  const handleShowLo = () => setShowLocation(true);
  const [pic, setPic] = React.useState(null);
  const inputFile = useRef(null);

  const { currentUser } = useAuth();
  const location = useLocation();
  const { chatName, setChatName } = useState("");
  const [input, setInput] = useState("");

  //handeling messages - we should push it to messages of each contacts.
  const sendMessage = (e) => {
    e.preventDefault();
    const ID = location.pathname.split("/").pop();
    const today = new Date();
    const user = users.find((user) => user.ID === Number(ID));
    if (input != "") {
      user.messages.push({
        content: input,
       time: today.getHours() + ':' + today.getMinutes(),
       type: "text",
        sender: userToDisplay.nickname
      });
    }
    setInput("");
  };

  const today = new Date();
  const UrlImg = (e) => {
    setPic(URL.createObjectURL(e.target.files[0]));
  };

  const setImg = () => {
    const ID = location.pathname.split("/").pop();

    const user = users.find((user) => user.ID === Number(ID));

    user.messages.push({ 
      content: pic, 
      time: today.getHours() + ':' + today.getMinutes(),
      type: "pic",
      sender: userToDisplay.nickname
     });

    setShowPic(false);
  };

  //check which user is loggin so we can display his nickname
  let userToDisplay = Registered_Users.find(
    (user) => user.username === currentUser.username
  );

  //here we seperate the chat windows per ID - the id is the last part in the URL
  var parts = window.location.href.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

  const getUser = contacts.find((user) => user.ID == lastSegment);
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  return (
    /*
    first part - className="chat_header" - chat header - include the contact name and picture.
    second part - className="chat_body" - is the chat body that includes the messages and the messages design
    LoggedInUser should be replaced with the logged in username.
    time should be replaced with timestamp from the db
    third part - className="chat_footer" - its the bottom input - 
    the dropdowns and the message input row.
    */
    <div className="chat">
      <div className="chat_header">
        <img src={getUser.pic} className="chatAvatar" />
        <div className="chat_headerInfo">
          <h3> {getUser.name} </h3>
          <p>{getUser.last_seen}</p>
        </div>

        <div className="chat_headerRight"></div>
      </div>
      <div className="chat_body">
        {getUser.messages.map((message) => {
          return (
            <p
              key={message.time}
              className={`chat_message ${message.sender === currentUser.nickname && "chat_reciever"}`}
            >
                
              <span className= {`chat_name ${message.sender === currentUser.nickname && "chat_reciever_name"}`}>
                  {message.sender}
                   </span>
                   {message.type === "text" ? <div>
              {message.content} </div> :
              <img class="img" src={message.content} /> }
              <span className="chat_timestamp">
                {message.time}
                {}
              </span>
            </p>
          );
        })}
      </div>
      <div className="chat_footer">
        <div
          className="drop_down"
          style={{ border: "none", textAlign: "center", display: "flex" }}
        >
          <DropdownButton
            id="dropdown-basic-button"
            variant=""
            drop="up"
            title={<img src={fileIcon} width={"25px"} height={"30px"} />}
          >
            <Dropdown.Item
              onClick={handleShow}
              style={{ border: "none", width: "150px", textAlign: "left" }}
              input={{ type: "file", accept: "image/*", id: "single" }}
            >
              <img src={pictureIcon} width={"20px"} height={"20px"} /> Add
              Picture
            </Dropdown.Item>

            <Dropdown.Item
              onClick={handleShowVid}
              style={{ border: "none", width: "150px", textAlign: "left" }}
            >
              <img
                src={videoIcon}
                width={"20px"}
                height={"20px"}
                textAlign={"left"}
              />{" "}
              Add Video
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleShowVoice}
              style={{ border: "none", width: "150px", textAlign: "left" }}
            >
              <img src={soundIcon} width={"20px"} height={"20px"} /> Record
              Audio
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleShowLo}
              style={{ border: "none", width: "150px", textAlign: "left" }}
            >
              <img src={locationIcon} width={"20px"} height={"20px"} /> Add
              Location
            </Dropdown.Item>
          </DropdownButton>

          <Modal show={pictureShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                  Add Picture
                <img src={pictureIcon} width={"35px"} height={"35px"} />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Add Image from your Computer</Form.Label>
                <Form.Control type="file" onChange={UrlImg} src={pic} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={setImg}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={videoShow} onHide={handleCloseVid}>
            <Modal.Header closeButton>
              <Modal.Title>
                  Add Video
                <img src={videoIcon} width={"35px"} height={"35px"} />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Add Video from your Computer</Form.Label>
                <Form.Control type="file" multiple accept="video/*" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseVid}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseVid}>
              Send
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={locationShow} onHide={handleCloseLo}>
            <Modal.Header closeButton>
              <Modal.Title>
                  Add Location
                <img src={locationIcon} width={"35px"} height={"35px"} />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Add Location</Form.Label>
                <Form.Control type="file" multiple accept="video/*" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseLo}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseLo}>
              Send
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={voiceShow} onHide={handleCloseVoice}>
            <Modal.Header closeButton>
              <Modal.Title>
                  Add Audio
                <img src={soundIcon} width={"35px"} height={"35px"} />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFile" className="audio">
                <audio src={audioURL} controls className="audio_recorder"/>
                <div className="seperator"></div>
                <button className="start_record" onClick={startRecording} disabled={isRecording}>
                    Start recording
                </button>
                <button className="stop_record" onClick={stopRecording} disabled={!isRecording}>
                    Stop recording
                </button>

                <Form.Control
                  type="radio"
                  x-webkit-speech
                  multiple
                  accept="video/*"
                  style={{display:"none"}}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseVoice}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseVoice}>
              Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
