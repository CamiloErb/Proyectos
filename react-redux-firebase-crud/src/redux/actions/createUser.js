export const type = "createUser";

const createUser = (user) => {
  return {
    type,
    payload: user,
  };
};

export default createUser;
