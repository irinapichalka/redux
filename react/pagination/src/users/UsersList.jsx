import React from "react";
import Pagination from "./Pagination";
import User from "./User";
import { connect } from "react-redux";
import * as userActions from "./usersList.actions";

class UsersList extends React.Component {
  render() {
    const { users, currentPage, goNext, goPrev } = this.props;
    return (
      <div>
        <Pagination currentPage={currentPage} goNext={goNext} goPrev={goPrev} />
        <ul className="users">
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  goPrev: userActions.goPrev,
  goNext: userActions.goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;
