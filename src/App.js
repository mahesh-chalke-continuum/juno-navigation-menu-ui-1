import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CustomerLogo from './components/customer-logo'
import DashboardMenu from './components/dashboard-menu'
import ClientSystemsMenu from './components/client-systems-menu'
import AutomationMenu from './components/automation-menu'
import ConfigurationMenu from './components/configuration-menu'
import ReportsMenu from './components/reports-menu'
import WelcomeUserMenu from './components/welcome-user-menu'
import ResourcesMenu from './components/resources-menu'
import FeedbackMenu from './components/feedback-menu'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, window.topNavDelay);

    this.setState(window.menumetadata || {})
  }

  render() {
    return this.state.loading 
    ? (
      <div className="menu-root">
       <div className="loader-outer">
       
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    )
    : (
      <div className="menu-root">
        <CustomerLogo />
        <DashboardMenu {...this.state['dashboard-menu']} />
        <ClientSystemsMenu {...this.state['client-systems-menu']} />
        <AutomationMenu {...this.state['automation-menu']} />
        <ConfigurationMenu {...this.state['configuration-menu']} />
        <ReportsMenu {...this.state['reports-menu']} />
        <WelcomeUserMenu {...this.state['welcome-user-menu']} />
        <ResourcesMenu {...this.state['resources-menu']} />
        <FeedbackMenu {...this.state['feedback-menu']} />
      </div>
    );
  }
}

export default App;
