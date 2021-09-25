import React, { Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './SignUp/SignUp';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import LoginPage from "./LoginPage/LoginPage";
import jwtDecode from "jwt-decode";





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
        const user = jwtDecode(jwt);
        this.setState({
            user,
        });
        console.log(user);
    } catch {}

};

render() {
    const user = this.state;
    
    return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh"}}
    >
        <div className="w-100" style={{ maxWidth: "400px"}}>
   
    <Router>
     
   <Switch>
       <Route exact path="/" component={LoginPage} />
       <Route path="/signup" component={Signup} />
       <Route path="/profile" component={ProfilePage}/> 
       {/* (create a component for potiential matches
       on profile page  ) */} 
       {/* // (create a create profile page with form for location, bio etc)
       <Route path= "/" component={Create Profile}/> */}
       
   </Switch>
  
    </Router>
    </div>
    </Container>
        );
}

}

export default App;

