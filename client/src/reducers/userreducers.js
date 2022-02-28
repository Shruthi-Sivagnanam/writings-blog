export const usersignupreducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNUP_REQUEST":
      return { loading: true };
    case "USER_SIGNUP_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_SIGNUP_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userloginreducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
export const userUpdateProfile = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_SUCCESS":
      return { loading: false, userInfo: action.payload, success: true };
    case "USER_UPDATE_FAIL":
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
