import React, { Component } from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";

const FeedbackMenu = props => (
  <MenuItemLevel1
    leftseparator="true"
    disablebottomhighlightonhover="true"
    title="Feedback"
    {...props}
  />
);

export default FeedbackMenu;
