import firebase from "../../database/firebase";
import { type as createUserType } from "../actions/createUser";

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case createUserType: {
      return firebase.db.collection("users").add({
        name: payload.username,
        password: payload.password,
      });
    }
    default:
      return state;
  }
}

export default reducer;
