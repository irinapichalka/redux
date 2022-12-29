import { SHOW_SPINNER, USER_DATA_RECIEVED } from "./users.actions";

const initialData = {
  users: {
    isFetching: false,
    userData: null,
  },
};

const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        users: {
          isFetching: true,
        },
      };
    }
    case USER_DATA_RECIEVED: {
      return {
        ...state,
        users: {
          userData: action.payload.userData,
          isFetching: false,
        },
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
