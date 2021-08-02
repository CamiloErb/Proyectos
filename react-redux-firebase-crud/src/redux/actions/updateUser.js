export const type = "updateUser";

const updateUser = (text) => {
  return {
    type,
    payload: text,
  };
};

export default updateUser;
