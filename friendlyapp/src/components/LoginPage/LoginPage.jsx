import React, { useState } from 'react';
import LoginForm from './LoginForm';


 const LoginPage = (props) => {
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});

    const loginUser = (username, password) => {
        setUsername(username);
        setPassword(password);

    };

        return (
            
                <div>
                <LoginForm loginUser={loginUser} />
                </div>
            );
        };

export default LoginPage;

