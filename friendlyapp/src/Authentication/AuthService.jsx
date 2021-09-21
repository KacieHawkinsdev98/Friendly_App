import axios from "axios";

const Base_URL = "(http://127.0.0.1:8000/api/auth/)";

const signup = (email, username, password) => {
  return axios.post(Base_URL + "signup", {
    email,
    username,
    password,
  });
};

const loginUser = (username, password) => {
    return axios
      .post(Base_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };


  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    signup,
    loginUser,
    logout,
    getCurrentUser,
  };



