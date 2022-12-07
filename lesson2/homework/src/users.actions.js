export const ADD = "USERS/ADD";
export const DELETE = "USERS/DELETE";

export const addUser = (userData) => {
  return {
    type: ADD,
    payload: userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
