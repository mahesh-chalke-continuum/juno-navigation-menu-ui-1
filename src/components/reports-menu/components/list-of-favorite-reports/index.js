import React, { Component } from "react";

class ListOfFavoriteReports extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="simple-menu-item-level-3-link">Agent Summary</div>
        <div className="simple-menu-item-level-3-link">Continuum Vault BDR</div>
        <div className="simple-menu-item-level-3-link">
          Patch update reports
        </div>
        <div className="simple-menu-item-level-3-link">All favorites</div>
      </React.Fragment>
    );
  }
}

export default ListOfFavoriteReports;
