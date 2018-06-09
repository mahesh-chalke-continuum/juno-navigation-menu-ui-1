import React from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";
import SimpleMenuItemLevel2 from "../../shared/components/simple-menu-item-level-2";

const AutomationMenu = props => {
  return (
    <MenuItemLevel1 title="Automation" {...props}>
      {props.children && (
        <React.Fragment>
          <SimpleMenuItemLevel2
            title="Tasks and sequences"
            {...props.children["tasks-and-sequences-menu"]}
          />
          <SimpleMenuItemLevel2
            title="Scripts"
            {...props.children["scripts-menu"]}
          />
        </React.Fragment>
      )}
    </MenuItemLevel1>
  );
};

export default AutomationMenu;
