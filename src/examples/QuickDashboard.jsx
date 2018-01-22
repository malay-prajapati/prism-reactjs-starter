import React from 'react';
import { Dashboard, DashboardWidgetLayout, DashboardWidgetHeader }
  from 'prism-reactjs';
import 'prism-reactjs/dist/index.css';
import HelloWorld from './HelloWorld.jsx';
import ClustersWidget from './ClustersWidget.jsx';
import './HelloWorld.less';

const dashboardProps = {
  layouts: {
    sm: [
      {
        i: 'box1'
      },
      {
        i: 'box2'
      },
      {
        i: 'box3'
      }
    ]
  }
};

export default class QuickDashboard extends React.Component {

  renderHelloWorldWidget() {
    const headerNode = (
      <DashboardWidgetHeader title="Hello World Widget"
        showCloseIcon={ false } />
    );

    return (
      <DashboardWidgetLayout
        header={ headerNode }
        body={ <HelloWorld /> } />
    );
  }

  render() {
    return (
      <Dashboard { ...dashboardProps }>
        <div key="box1">
          <HelloWorld />
        </div>
        <div key="box2">
          <ClustersWidget />
        </div>
        <div key="box3">
          Box 3
        </div>
      </Dashboard>
    );
  }

}
