import React from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";
import SimpleMenuItemLevel2 from "../../shared/components/simple-menu-item-level-2";

const DashboardMenu = props => (
  <MenuItemLevel1 title="Dashboard" {...props}>
    {props.children && (
      <React.Fragment>
        <SimpleMenuItemLevel2
          title="My Dashboard"
          {...props.children["my-dashboard-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Tickets"
          {...props.children["tickets-menu"]}
        />
      </React.Fragment>
    )}
  </MenuItemLevel1>
);

export default DashboardMenu;
