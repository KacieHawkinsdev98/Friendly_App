import React, { useState } from "react";
import LoginUser from "./LoginAxiosReq";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"



const LoginForm = ({ loginUser }) => {
    //form variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = {};

    //stores user input in post request format and sends back to login page
    const handleSubmit = (event) => {
        event.preventDefault();

        //logging in with custom hook
        LoginUser(username, password);

        //resets form
        setUsername("");
        setPassword("");
    };

return (
    <>
      <Card>
          <Card.Body>
              <h2 className= "text-center mb-4" >Login</h2>
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="username">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                  </Form.Group>
                  <Button className= "w-100" type="submit">Login</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className= "w-100 text-center mt-2">
          Dont have an account? <Link to="/signup"> Sign Up</Link>
         </div>
       </>
    );
};

   

export default LoginForm;   