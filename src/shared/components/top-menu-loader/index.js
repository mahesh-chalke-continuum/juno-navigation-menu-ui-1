import React, { Component } from "react";

class TopMenuLoader extends Component {
  render() {
    return (
      <div className="loader-outer">
        <div class="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default TopMenuLoader;
