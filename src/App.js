import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItemLevel1 from "./shared/components/menu-item-level-1";
import TopMenuLoader from './shared/components/top-menu-loader'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      rootItems: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false, rootItems: window.menuMetadata || [] })
    }, window.topNavDelay);
  }

  render() {
    const topLevelItems = this.state.rootItems.map(c => <MenuItemLevel1 {...c} />);
    return this.state.loading 
    ? (
      <div className="menu-root">
        <TopMenuLoader/>
      </div>
    )
    : (
      <div className="menu-root">
        {topLevelItems}
      </div>
    );
  }
}

export default App;
