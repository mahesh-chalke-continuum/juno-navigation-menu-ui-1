import React from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";
import SimpleMenuItemLevel2 from "../../shared/components/simple-menu-item-level-2";

const WelcomeUserMenu = props => (
  <MenuItemLevel1
    disablebottomhighlightonhover="true"
    title="Welcome, Andy"
    {...props}
  >
    {props.children && (
      <React.Fragment>
        <SimpleMenuItemLevel2
          title="Preferences"
          {...props.children["preferences-menu"]}
        />
        <SimpleMenuItemLevel2
          title="User Profile"
          {...props.children["user-profile-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Logout"
          {...props.children["logout-menu"]}
        />
      </React.Fragment>
    )}
  </MenuItemLevel1>
);

export default WelcomeUserMenu;
