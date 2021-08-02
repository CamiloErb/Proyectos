export const type = "deleteUser";

const deleteUser = (text) => {
  return {
    type,
    payload: text,
  };
};

export default deleteUser;
