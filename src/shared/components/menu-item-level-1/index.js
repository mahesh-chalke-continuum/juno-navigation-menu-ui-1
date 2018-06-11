import React, { Component } from "react";
import visibleIfEnabled from "../visibleIfEnabled";
import withTargetUrl from "../withTargetUrl";
import SimpleMenuItemLevel2 from "../simple-menu-item-level-2";
import "./index.css";

class MenuItemLevel1 extends Component {
  
  render() {
    console.log(this.props.elementId);
    return (
      <div
        className={
          "menu-item-level-1" +
          (this.props.leftseparator ? " menu-item-level-1-separator" : "") +
          (this.props.disableHighlight
            ? " disable-bottom-highlight-onhover"
            : "")
        }
      >
        <a id={this.props.elementId} className={ "menu-item-level-1-link" + (this.props.customerLogo ? " no-bottom-highlight" : "") }>
          {!this.props.customerLogo
            ? this.props.title
            : <img class="logo" id="logoImg" src={this.props.customerLogo} />}
        </a>
        {
          this.props.childItems && this.props.childItems.length > 0 &&
            <div className="menu-item-level-1-content">
              {this.props.childItems.map(c =>
                <SimpleMenuItemLevel2 {...c} />
              )}
            </div>
        }
      </div>
    );
  }
}

export default visibleIfEnabled(withTargetUrl(MenuItemLevel1));
