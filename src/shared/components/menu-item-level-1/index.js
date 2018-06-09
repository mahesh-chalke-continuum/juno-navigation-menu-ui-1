import React, { Component } from "react";
import visibleIfEnabled from "../visibleIfEnabled";
import withTargetUrl from "../withTargetUrl";
import "./index.css";

class MenuItemLevel1 extends Component {
  render() {
    return (
      <div
        className={
          "menu-item-level-1" +
          (this.props.leftseparator ? " menu-item-level-1-separator" : "") +
          (this.props.disablebottomhighlightonhover
            ? " disable-bottom-highlight-onhover"
            : "")
        }
      >
        <a href="#" className="menu-item-level-1-link">
          {this.props.title}
        </a>
        {!Array.isArray(this.props.children) && (
            <div className="menu-item-level-1-content">
              {this.props.children}
            </div>
          )}
      </div>
    );
  }
}

export default visibleIfEnabled(withTargetUrl(MenuItemLevel1));
