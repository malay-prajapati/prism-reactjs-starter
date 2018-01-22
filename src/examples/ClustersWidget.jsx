import React from 'react';
import { DashboardWidgetLayout, DashboardWidgetHeader, WidgetTable }
  from 'prism-reactjs';
import './ClustersWidget.less';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    render: (value, payload) => {
      if (value) {
        return value;
      }
      return '-';
    }
  }
];

export default class ClustersWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      fetchError: null,
      response: {}
    };
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    const body = {
      kind: 'cluster',
      offset: 0,
      length: 300
    };
    window.fetch('/api/nutanix/v3/clusters/list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then((response) => {
      if (!response.ok) {
        response.json().then((responseBody) => {
          this.setState({
            loading: false,
            fetchError: JSON.stringify(responseBody)
          });
        });
        return;
      }

      response.json().then((responseBody) => {
        this.setState({
          loading: false,
          response: responseBody,
          fetchError: null
        });
      });
    });
  }

  responseToTableData(response) {
    const { entities } = response;
    return entities.map((entity) => {
      return {
        id: entity.metadata.uuid,
        name: entity.spec.name,
        ip: entity.spec.resources.network.external_ip
      };
    });
  }

  render() {
    const { loading, response } = this.state;

    let bodyNode;
    if (!loading) {
      const dataSource = this.responseToTableData(response);
      bodyNode = (
        <WidgetTable dataSource={ dataSource }
          columns={ columns } />
      );
    }

    const headerNode = (
      <DashboardWidgetHeader title="PC Clusters" showCloseIcon={ false } />
    );

    return (
      <DashboardWidgetLayout
        className="cluster-widget"
        loading={ loading }
        header={ headerNode }
        body={ bodyNode } />
    );
  }

}
