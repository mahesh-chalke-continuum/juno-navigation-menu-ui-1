import React, { Component } from "react";
import visibleIfEnabled from "../visibleIfEnabled";
import withTargetUrl from "../withTargetUrl";
import SimpleMenuItemLevel2 from "../simple-menu-item-level-2";
import MenuItemLevel2GroupHeader from "../menu-item-level-2-group-header";
import "./index.css";

class MenuItemLevel1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calloutItems: []
    }
  }
  
  render() {
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
              <div className="grouped-menu-item-level-2-container">
                <div className="grouped-menu-item-level-2-dropdown">
                  {this.props.childItems.map(c => c.groupHeader
                        ? <MenuItemLevel2GroupHeader 
                            {...c} 
                            onMouseOver={() => {
                              this.setState({ calloutItems: c.childItems });
                            }}
                          />
                        : <SimpleMenuItemLevel2 {...c} />
                  )}
                </div>
                <div className="grouped-menu-item-level-2-callout">
                  { this.state.calloutItems.length > 0
                  ? this.state.calloutItems.map(co => <SimpleMenuItemLevel2 {...co} />)
                  : null }
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default visibleIfEnabled(withTargetUrl(MenuItemLevel1));
