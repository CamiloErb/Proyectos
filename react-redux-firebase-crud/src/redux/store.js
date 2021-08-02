import { createStore, combineReducers } from "redux";
import userCreation from "./reducers/userCreation";
import userUpdate from "./reducers/userUpdate";
import userDelete from "./reducers/userDelete";
import usersShow from "./reducers/usersShow"

const reducer = combineReducers({
  userCreation,
  userUpdate,
  userDelete,
  usersShow
});

const store = createStore(reducer);

export default store;
