import React from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Users } from "../localDataBase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./LoginComponent.css";

export default function LoginComponent() {
  //here we hold the input of the user (his username, password..)
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [onErorr, setOnError] = React.useState(false);
  const navigate = useNavigate();

  //check validity of given user in the login page
  //return true if valid' false else.
  const { setCurrentUser } = useAuth();

  //when pressing the login button we go to this function, check the validity of his details
  function validationUser(event) {
    event.preventDefault();
    //getUser is a boolean that hold true if the username that the user write is in the data base, and false otherwise.
    const getUser = Users.find((user) => user.username === username);
    //if the username is in the data base and the password that the user write is match to the user name, so navigate to chat page
    if (getUser && getUser.password === password) {
      setCurrentUser(getUser);
      navigate("/chat");
    } else {
      //else - set error to true.
      setOnError(true);
    }
  }

  // this function called when setOnError is true, it means we have error with the details that the user writem so we ALERT popup.
  const returnAlertError = () => {
    return (
      <Alert variant="danger" onClose={() => setOnError(false)} dismissible>
        <Alert.Heading style={{ fontSize: "15px" }}>
          Username or Password are not correct. please try again
        </Alert.Heading>
      </Alert>
    );
  };

  //this the "main" what the user see on the login page
  return (
    //first we wrap the all page with the css we wrote. every <Form.Group> is a place on the screen where the user can write his details.
    <div className="login-page">
      <div className="login-box">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="Username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="login-button">
            <Button variant="primary" type="login" onClick={validationUser}>
              Login
            </Button>
            <div style={{ maxWidth: "400px" }}>
              {onErorr && returnAlertError()}
            </div>
          </div>
          <div>
            not register?
            <Link to="/register">click here</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
