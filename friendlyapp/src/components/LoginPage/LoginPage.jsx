import React, { useRef, useState } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginRequest from './LoginAxiosReq';
    


const LoginPage = ({ LoginRequest }) => {
  
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = {};
  

    const handleSubmit = (event) => {
        event.preventDefault();
  
       
        LoginRequest(username, password);
  
        
        setUserName("");
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
                      <Form.Control type="email" value={username} onChange={(event) => setUserName(event.target.value)}/>
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


export default LoginPage;

