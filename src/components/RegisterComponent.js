// import React from "react";
// import { Button, Form, Alert } from "react-bootstrap";
// import { Users } from "../localDataBase";
// import { useAuth } from "../context/AuthContext";
// import { Navigate } from "react-router";
// import { useNavigate } from "react-router";
// import "./LoginComponent.css";

// export default function LoginComponent() {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [onErorr, setOnError] = React.useState(false);
//   const navigate = useNavigate();

//   //check validity of given user in the login page
//   //return true if valid' false else.
//   const { currentUser, setCurrentUser } = useAuth();

//   function validationUser(event) {
//     event.preventDefault();
//     const getUser = Users.find((user) => user.username === username);
//     if (getUser && getUser.password === password) {
//       setCurrentUser(getUser);
//     } else {
//       setOnError(true);
//     }
//   }

//   if (currentUser) {
//     return <Navigate to="/chat" />;
//   }

//   const returnAlertError = () => {
//     return (
//       <Alert variant="danger" onClose={() => setOnError(false)} dismissible>
//         <Alert.Heading style={{ fontSize: "12px" }}>
//           Username or Password are not correct. please try again
//         </Alert.Heading>
//       </Alert>
//     );
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="Username"
//               placeholder="Enter Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <div className="login-button">
//             <Button variant="primary" type="login" onClick={validationUser}>
//               Login
//             </Button>
//             <div style={{ maxWidth: "400px" }}>
//               {onErorr && returnAlertError()}
//             </div>
//           </div>
//           <Button variant="link" onClick={() => navigate("/register")}>
//             Click here to register
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
