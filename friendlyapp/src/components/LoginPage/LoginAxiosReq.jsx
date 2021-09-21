import axios from "axios";

const LoginRequest = (username, password) => {
    const userLoginInfo = {
        username: username,
        password: password,
    };


 async function requestLogin(userLoginInfo) {
    try {
        let response = await axios.post( "http://127.0.0.1:8000/api/auth/login/", userLoginInfo);

       localStorage.setItem("token", response.data.access);
       console.log(localStorage);
       console.log(response.data.access);
       window.location = "/";
    } catch (err) {
        console.log(err);
    }
}   
      requestLogin(userLoginInfo);


};

export default LoginRequest;

