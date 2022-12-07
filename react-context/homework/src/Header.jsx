import React from "react";
import UserMenu from "./UserMenu";
import { UserDataContext } from "./userData-context";

const Header = () => {
  return (
    <div className="header">
      <UserDataContext.Provider value={this.state.userData}>
        <UserMenu />
      </UserDataContext.Provider>
    </div>
  );
};

export default Header;
