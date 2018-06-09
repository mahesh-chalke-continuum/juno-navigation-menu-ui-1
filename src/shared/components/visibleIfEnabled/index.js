import React, { Component } from "react";

export default function(WrappedComponent) {
    return class extends Component {
      render() {
        const { enabled } = this.props;
        return enabled 
            ? <WrappedComponent {...this.props} />
            : null
      }
    }
  }