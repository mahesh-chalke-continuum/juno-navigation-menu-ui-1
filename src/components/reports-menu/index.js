import React, { Component } from "react";
import MenuItemLevel1 from "../../shared/components/menu-item-level-1";
import MenuItemLevel2GroupHeader from "../../shared/components/menu-item-level-2-group-header";
import ListOfReportsForBusiness from "./components/list-of-reports-for-business";
import ListOfReportsForClients from "./components/list-of-reports-for-clients";
import ListOfFavoriteReports from "./components/list-of-favorite-reports";
import ListOfCustomReports from "./components/list-of-custom-reports";
import "./index.css";

class ReportsMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "FOR YOUR CLIENTS"
    };
  }

  changeId = newId => this.setState({ id: newId });

  reportHeaderListMap = {
    "FOR YOUR CLIENTS": <ListOfReportsForClients />,
    "FOR YOUR BUSINESS": <ListOfReportsForBusiness />,
    FAVORITES: <ListOfFavoriteReports />,
    "CUSTOM REPORTS": <ListOfCustomReports />
  };

  render() {
    const props = this.props;

    return props.children ? (
      <MenuItemLevel1 title="Reports" {...props}>
          <div className="grouped-menu-item-level-2-container">
            <div className="grouped-menu-item-level-2-list">
              <MenuItemLevel2GroupHeader
                onMouseOver={() => this.changeId("FOR YOUR CLIENTS")}
                id="FOR YOUR CLIENTS"
                {...props.children["client-reports-menu"]}
              />
              <MenuItemLevel2GroupHeader
                onMouseOver={() => this.changeId("FOR YOUR BUSINESS")}
                id="FOR YOUR BUSINESS"
                {...props.children["business-reports-menu"]}
              />
              <MenuItemLevel2GroupHeader
                onMouseOver={() => this.changeId("FAVORITES")}
                id="FAVORITES"
                {...props.children["favorite-reports-menu"]}
              />
              <MenuItemLevel2GroupHeader
                onMouseOver={() => this.changeId("CUSTOM REPORTS")}
                id="CUSTOM REPORTS"
                {...props.children["custom-reports-menu"]}
              />
            </div>
            <div className="grouped-menu-item-level-2-callout">
              {this.reportHeaderListMap[this.state.id] || null}
            </div>
          </div>
      </MenuItemLevel1>
    ) : null;
  }
}

export default ReportsMenu;
