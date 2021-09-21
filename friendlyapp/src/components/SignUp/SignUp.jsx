// import React, { useRef, useState } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';


class Signup extends Component {
    state = {
    
        firstName: "",
        lastName: "",
        emailAddress: "",
        userName: "",
        password: ""

    }

     
 handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
        

    })
 };

 handleSubmit = (event) => {
    event.preventDefault();
    var user ={
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.emailAddress,
        username: this.state.userName,
        password: this.state.password,
        

    }
    this.registerUser(user)
 };
    async registerUser(user) {
        console.log(user)
      try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/register/',user);
      console.log(response.data)
    }
      catch (ex) {
         console.log('There was an error!');

        }          
    
    }

    render(){
        return (
    <>
      <Card>
          <Card.Body>
              <Form>
              <h2 className= "text-center mb-4" >Sign Up</h2>
              <Form.Group id="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" 
                      onChange={this.handleChange}
                      value={this.state.firstName} 
                      
                      />
                  </Form.Group>
                  <Form.Group id="lastname">
                 <Form.Label>Last Name</Form.Label>
                 <Form.Control type="text" 
                  onChange={this.handleChange}
                  value={this.state.lastName}
                 
                  />
                  </Form.Group>
                 <Form.Group id="email">
                 <Form.Label>Email</Form.Label>
                  <Form.Control type="email" 
                  onChange={this.handleChange}
                  value={this.state.emailAddress}
                  
                  />
                </Form.Group>
                   <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" 
                      onChange={this.handleChange}
                      value={this.state.userName}
                      
                  />
                  </Form.Group>
                   <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" 
                      onChange={this.handleChange}
                      value={this.state.password}
                  />
                  </Form.Group>
                  <Button className= "w-100" type="submit">Sign Up</Button>
                </Form>
        </Card.Body>
    </Card>
       <div className= "w-100 text-center mt-2">
          Already have an account? <Link to="/login"> Log In</Link>
         </div>
       </>
    )}
}

export default Signup; 


//this is for token confirmation
//   <div>
//    <Button className= "w-100" type= "submit" onClick={() => console.log(localStorage.getItem("token"))}>Click for Token!</Button>
//    </div>

// Signup Hooks Option

// export default function Signup() {
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const passwordConfirmRef = useRef()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)

//     function handleSubmit(e) {
//         e.preventDefault()

//         if(passwordRef.current.value !== 
//         passwordConfirmRef.current.value) {
//             return setError("Passwords do not match")
//         }
//         try {
//             setError("")
//             setLoading(true)
//             Signup(emailRef.current.value, passwordRef.current.value)
//         } catch {
//             setError("Failed to create account")

//         }
//        setLoading(false)
//     }

//     return (