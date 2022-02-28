import axios from "axios";

export const addblog =
  (user_id, username, title, category, content) => (dispatch) => {
    dispatch({ type: "ADD_BLOG_REQUEST" });
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    axios({
      method: "POST",
      data: {
        user_id: user_id,
        username: username,
        title: title,
        category: category,
        content: content,
      },
      config,
      withCredentials: true,
      url: "/blog/createblog",
    })
      .then((result) => {
        dispatch({ type: "ADD_BLOG_SUCCESS", payload: result });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_BLOG_FAIL",
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      });
  };
export const listallblog = () => (dispatch) => {
  dispatch({ type: "LIST_ALL_BLOG_REQUEST" });
  axios({
    method: "GET",
    withCredentials: true,
    url: "/blog/allblogs",
  })
    .then((result) => {
      dispatch({ type: "LIST_ALL_BLOG_SUCCESS", payload: result.data });
    })
    .catch((error) => {
      dispatch({
        type: "LIST_ALL_BLOG_FAIL",
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};
export const singleblog = (id) => (dispatch) => {
  dispatch({ type: "SINGLE_BLOG_REQUEST" });
  axios({
    method: "GET",
    params: {
      id: id,
    },
    withCredentials: true,
    url: "/blog/singleblog",
  })
    .then((result) => {
      dispatch({ type: "SINGLE_BLOG_SUCCESS", payload: result.data });
    })
    .catch((error) => {
      dispatch({
        type: "SINGLE_BLOG_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const editblog = (id, title, category, content) => (dispatch) => {
  dispatch({ type: "EDIT_BLOG_REQUEST" });
  const config = {
    header: {
      "Content-type": "application/json",
    },
  };
  axios({
    method: "POST",
    data: {
      id: id,
      title: title,
      category: category,
      content: content,
    },
    config,
    withCredentials: true,
    url: "/blog/editblog",
  })
    .then((result) => {
      dispatch({ type: "EDIT_BLOG_SUCCESS", payload: result });
    })
    .catch((error) => {
      dispatch({
        type: "EDIT_BLOG_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

export const deleteblog = (id) => (dispatch) => {
  dispatch({ type: "DELETE_BLOG_REQUEST" });
  const config = {
    header: {
      "Content-type": "application/json",
    },
  };
  axios({
    method: "POST",
    data: {
      id: id,
    },
    config,
    withCredentials: true,
    url: "/blog/deleteblog",
  })
    .then((res) => {
      dispatch({ type: "DELETE_BLOG_SUCCESS", payload: res });
    })
    .catch((error) => {
      dispatch({
        type: "DELETE_BLOG_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};
