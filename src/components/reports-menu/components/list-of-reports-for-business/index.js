import React, { Component } from "react";

class ListOfReportsForBusiness extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="simple-menu-item-level-3-link">Agents</div>
        <div className="simple-menu-item-level-3-link">Audits</div>
        <div className="simple-menu-item-level-3-link">Backups</div>
        <div className="simple-menu-item-level-3-link">Communicator</div>
        <div className="simple-menu-item-level-3-link">Patches</div>
        <div className="simple-menu-item-level-3-link">
          Preventive maintenance
        </div>
        <div className="simple-menu-item-level-3-link">Scripts</div>
        <div className="simple-menu-item-level-3-link">Technical details</div>
        <div className="simple-menu-item-level-3-link">Tickets</div>
        <div className="simple-menu-item-level-3-link">Security</div>
      </React.Fragment>
    );
  }
}

export default ListOfReportsForBusiness;
