import React, { Component } from "react";
import visibleIfEnabled from "../visibleIfEnabled";
import "./index.css";

class SimpleMenuItemLevel2 extends Component {
  render() {
    return (
      <a href={this.props.targeturl} className="simple-menu-item-level-2-link">
        {this.props.title}
      </a>
    );
  }
}

export default visibleIfEnabled(SimpleMenuItemLevel2);
