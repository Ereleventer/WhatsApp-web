import React from "react";
import { Button, Form } from "react-bootstrap";
import { Users } from "../localDataBase";

export default function RegisterComponent() {
  const [Username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  //check validity of given user in the login page
  //return true if valid' false else.

  function validationUser(userNameToCheck, passwordToCheck) {
    const getUser = Users.find((user) => user.username === userNameToCheck);
    if (
      getUser.username === userNameToCheck &&
      getUser.password === passwordToCheck
    ) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username REGISTER</Form.Label>
          <Form.Control
            type="Username"
            placeholder="Enter Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password REGISTER</Form.Label>
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
          <Button variant="primary" type="login">
            Login
          </Button>
        </div>
        <div>
          <p className="link">
            Not registered? <a href="#">click here to registered</a>
          </p>
        </div>
      </Form>
    </div>
  );
}
