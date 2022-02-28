export const addblogreducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BLOG_REQUEST":
      return { loading: true };
    case "ADD_BLOG_SUCCESS":
      return { loading: false, success: true };
    case "ADD_BLOG_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};
export const listallblogreducer = (state = {}, action) => {
  switch (action.type) {
    case "LIST_ALL_BLOG_REQUEST":
      return { loading: true };
    case "LIST_ALL_BLOG_SUCCESS":
      return { loading: false, blog: action.payload };
    case "LIST_ALL_BLOG_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const singleblogreducer = (state = {}, action) => {
  switch (action.type) {
    case "SINGLE_BLOG_REQUEST":
      return { loading: true };
    case "SINGLE_BLOG_SUCCESS":
      return { loading: false, blog: action.payload };
    case "SINGLE_BLOG_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const editblogreducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_BLOG_REQUEST":
      return { loading: true };
    case "EDIT_BLOG_SUCCESS":
      return { loading: false, success: true };
    case "EDIT_BLOG_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};
export const deleteblogreducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_BLOG_REQUEST":
      return { loading: true };
    case "DELETE_BLOG_SUCCESS":
      return { loading: false, success: true };
    case "DELETE_BLOG_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};
