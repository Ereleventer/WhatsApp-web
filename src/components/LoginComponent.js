import React from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Users } from "../localDataBase";
import { useAuth } from "../context/AuthContext";
import "./LoginComponent.css";
import { Navigate } from "react-router";

export default function LoginComponent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [onErorr, setOnError] = React.useState(false);

  //check validity of given user in the login page
  //return true if valid' false else.
  const { currentUser, setCurrentUser } = useAuth();

  function validationUser(event) {
    event.preventDefault();
    const getUser = Users.find((user) => user.username === username);
    if (getUser && getUser.password === password) {
      setCurrentUser(getUser);
    } else {
      setOnError(true);
    }
  }

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const returnAlertError = () => {
    return (
      <Alert variant="danger" onClose={() => setOnError(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  };

  return (
    <div className="login-page">
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="primary" type="login" onClick={validationUser}>
            Login
          </Button>
        </div>
        {onErorr && returnAlertError()}
        <div>
          <p className="link">
            Not registered? <a href="#">click here to registered</a>
          </p>
        </div>
      </Form>
    </div>
  );
}
