import React from "react";
import { connect } from "react-redux";
import Filter from "../Filter";
import User from "./User";
import * as userActions from "./users.actions";
import { usersListSelector, filterTextSelector } from "./users.selectors";

class UsersList extends React.Component {
  handleChange = (event) => {
    const { value } = event.target;
    this.props.filter(value);
  };

  render() {
    const { users, filterText } = this.props;
    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={filterText}
          count={users.length}
        />
        <ul className="users">
          {users.map((user) => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    users: usersListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  filter: userActions.filter,
};

const connector = connect(mapStatetoProps, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;
