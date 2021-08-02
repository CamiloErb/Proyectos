export const type = "showUsers";

const showUser = (users) => {
  return {
    type,
    payload: users,
  };
};

export default showUser;
