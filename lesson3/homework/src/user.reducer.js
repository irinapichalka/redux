import { SET_USER, REMOVE_USER } from "./users.actions";

const initialState = {
  user: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
