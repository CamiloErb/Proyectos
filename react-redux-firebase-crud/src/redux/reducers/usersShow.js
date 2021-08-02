import firebase from "../../database/firebase";
import { type as showUsersType } from "../actions/showUsers";

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case showUsersType: {
    const users = []
       firebase.db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          const { name, password } = doc.data();
          users.push({
            id: doc.id,
            name,
            password,
          });
        });
      });
      return users
}
    default:
      return state;
  }
}

export default reducer;
