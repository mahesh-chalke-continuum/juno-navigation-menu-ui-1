import React from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";
import SimpleMenuItemLevel2 from "../../shared/components/simple-menu-item-level-2";

const ResourcesMenu = props => (
  <MenuItemLevel1
    leftseparator="true"
    disablebottomhighlightonhover="true"
    title="Resources"
    {...props}
  >
    {props.children && (
      <React.Fragment>
        <SimpleMenuItemLevel2
          title="Partner Support"
          {...props.children["partner-support-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Doc Center"
          {...props.children["doc-center-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Continuum University"
          {...props.children["continuum-university-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Collaborate"
          {...props.children["collaborate-menu"]}
        />
        <SimpleMenuItemLevel2
          title="Accounting"
          {...props.children["accounting-menu"]}
        />
      </React.Fragment>
    )}
  </MenuItemLevel1>
);

export default ResourcesMenu;
