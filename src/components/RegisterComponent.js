import React from "react";
import { Users } from "../localDataBase";
import { useNavigate } from "react-router";
import { Form, Button, Alert } from "react-bootstrap";
import "./RegisterComponent.css";

export default function RegisterComponent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [onErorrUsername, setOnErrorUsername] = React.useState(false);
  const [onErorrNickname, setOnErrorNickname] = React.useState(false);
  const [onErorrPassword, setOnErrorPassword] = React.useState(false);
  const [pic, setPic] = React.useState(null);

  const navigate = useNavigate();

  function validationUser(event) {
    event.preventDefault();
    console.table(Users);
    const getUser = Users.find((user) => user.username === username);
    // if this username already exist
    if (getUser || username === "") {
      setOnErrorUsername(true);
      return;
    }

    //if the password is empty (not valid)
    if (password === "" || password != password2) {
      setOnErrorPassword(true);
      return;
    }
    //if the nickname is empty
    if (nickname === "") {
      setOnErrorNickname(true);
      return;
    }

    Users.push({ username, password, pic, nickname });
    console.table(Users);

    navigate("/login");
  }

  const returnAlertErrorUsername = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => setOnErrorUsername(false)}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "15px" }}>
          Username not valid or already exist
        </Alert.Heading>
      </Alert>
    );
  };

  const returnAlertErrorPassword = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => setOnErrorPassword(false)}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "15px" }}>
          Password not valid
        </Alert.Heading>
      </Alert>
    );
  };

  const returnAlertErrorNickname = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => setOnErrorNickname(false)}
        dismissible
      >
        <Alert.Heading style={{ fontSize: "15px" }}>
          Please enter a Nickname
        </Alert.Heading>
      </Alert>
    );
  };

  return (
    <div className="register-page">
      <div className="register-box">
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>confirmation password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="Nickname"
              placeholder="Enter Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              input
              type="file"
              value={pic}
              onChange={(e) => setPic(e.target.value)}
            />
          </Form.Group>

          <div className="register-button">
            <Button variant="primary" type="register" onClick={validationUser}>
              Register
            </Button>
            <div style={{ maxWidth: "400px" }}>
              {onErorrUsername && returnAlertErrorUsername()}
              {onErorrPassword && returnAlertErrorPassword()}
              {onErorrNickname && returnAlertErrorNickname()}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
