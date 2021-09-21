import React from 'react';
import Signup from './SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import LoginPage from "./LoginPage/LoginPage";



function App() {
    return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh"}}
    >
        <div className="w-100" style={{ maxWidth: "400px"}}>
   
    <Router>
     
   <Switch>
       <Route exact path="/" component={ProfilePage} />
       <Route path="/signup" component={Signup} />
       <Route path="/login" component={LoginPage}/>
   </Switch>
  
    </Router>
    </div>
    </Container>
        )
}

export default App

