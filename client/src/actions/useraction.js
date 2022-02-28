import axios from "axios";

export const signup = (username, email, password) => (dispatch) => {
  dispatch({ type: "USER_SIGNUP_REQUEST" });
  const config = {
    header: {
      "Content-type": "application/json",
    },
  };
  axios({
    method: "POST",
    data: {
      username: username,
      email: email,
      password: password,
    },
    config,
    withCredentials: true,
    url: "/user/signup",
  })
    .then((res) => {
      if (res.data === "Already exists!")
        dispatch({ type: "USER_SIGNUP_FAIL", payload: res.data });
      else {
        dispatch({ type: "USER_SIGNUP_SUCCESS", payload: res.data });
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    })
    .catch((err) => {
      dispatch({
        type: "USER_SIGNUP_FAIL",
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    });
};

export const login = (username, password) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  axios({
    method: "POST",
    data: {
      username: username,
      password: password,
    },
    withCredentials: true,
    url: "user/login",
  })
    .then((res) => {
      if (res.data === "No such user exists" || res.data === "Wrong input")
        dispatch({ type: "USER_LOGIN_FAIL", payload: res.data });
      else {
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
        sessionStorage.setItem("username", res.data.username);
        sessionStorage.setItem("id", res.data._id);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    })
    .catch((error) => {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};
export const logout = () => (dispatch) => {
  sessionStorage.clear();
  dispatch({ type: "USER_LOGOUT" });
};

export const update = (id, username) => (dispatch) => {
  dispatch({ type: "USER_UPDATE_REQUEST" });
  axios({
    method: "POST",
    data: {
      id: id,
      username: username,
    },
    withCredentials: true,
    url: "user/update",
  }).then((res) => {
    if (res.data === "fail")
      dispatch({ type: "USER_UPDATE_FAIL", payload: res.data });
    else {
      dispatch({ type: "USER_UPDATE_SUCCESS", payload: res.data });
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
      sessionStorage.setItem("userInfo", JSON.stringify(res.data));
      sessionStorage.setItem("username", res.data.username);
    }
  });
};
