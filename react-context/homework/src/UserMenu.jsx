import React from "react";
import { UserDataContext } from "./userData-context";

const UserMenu = () => {
  return (
    <div className="menu">
      <span className="menu__greeting">
        Hello, {this.context.userData.name}
      </span>
      <img
        alt="User Avatar"
        src={this.context.userData.avatar_url}
        className="menu__avatar"
      />
    </div>
  );
};

UserMenu.contextType = UserDataContext;

export default UserMenu;
