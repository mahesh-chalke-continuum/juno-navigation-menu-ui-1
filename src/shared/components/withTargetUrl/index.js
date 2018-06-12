import React, { Component } from "react";

export default function(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render();

      return React.cloneElement(
        elementsTree,
        { ...elementsTree.props, ...this.props },
        elementsTree.props.children.map(
          (c, key) =>
            c.type === "a"
              ? React.cloneElement(
                  c,
                  { ...c.props, href: this.props.targeturl, key: { key } },
                  c.props.children
                )
              : c
        )
      );
    }
  };
}
