export const FILTER = "USERS_LIST/FILTER";

export const filter = (text) => {
  return {
    type: FILTER,
    payload: {
      text,
    },
  };
};
