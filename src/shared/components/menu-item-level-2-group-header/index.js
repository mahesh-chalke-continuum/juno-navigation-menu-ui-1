import React, { Component } from "react";
import visibleIfEnabled from "../visibleIfEnabled";
import withTargetUrl from "../withTargetUrl";
import "./index.css";

class MenuItemLevel2GroupHeader extends Component {
  render() {
    const { title, onMouseOver } = this.props;

    return (
      <div className="grouped-menu-item-level-2-header-container">
        <a
          onMouseOver={onMouseOver}
          className="grouped-menu-item-level-2-header"
        >
          {title}
        </a>
        <span>></span>
      </div>
    );
  }
}

export default visibleIfEnabled(withTargetUrl(MenuItemLevel2GroupHeader));
