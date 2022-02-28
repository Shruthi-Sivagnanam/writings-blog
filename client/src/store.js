import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userloginreducer,
  usersignupreducer,
  userUpdateProfile,
} from "./reducers/userreducers";
import {
  addblogreducer,
  deleteblogreducer,
  editblogreducer,
  listallblogreducer,
  singleblogreducer,
} from "./reducers/blogreducers";

const reducer = combineReducers({
  userSignup: usersignupreducer,
  userLogin: userloginreducer,
  userUpdate: userUpdateProfile,
  blogAdd: addblogreducer,
  blogAll: listallblogreducer,
  blogsingle: singleblogreducer,
  blogedit: editblogreducer,
  blogdelete: deleteblogreducer,
});

const userInfoinsession = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null;
const initialState = { userLogin: { userInfo: userInfoinsession } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
