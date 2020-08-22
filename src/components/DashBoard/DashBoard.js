import React from "react";
import { Table } from '../Table'
import API from "../../utils/API";

export class Dashboard extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        project_data : [],
      };
    }

  async componentWillMount () {
    var project_data;
    const [firstResponse] = await Promise.all([
      API.getProjects()
    ]);
    project_data = firstResponse;
    this.setState({
      project_data : project_data,
    });
  }
  
  render() {
    const project_columns = [
      {
        Header: 'Name',
        accessor: 'id' // String-based value accessors!
      },
      {
        Header: 'Platform',
        accessor: 'platform' // String-based value accessors!
      },
      {
        Header: 'Type',
        accessor: 'type' // String-based value accessors!
      },
      {
        Header: 'Year',
        accessor: 'year' // String-based value accessors!
      },
      {
        Header: 'keywords',
        accessor: 'keywords' // String-based value accessors!
      },
      {
        Header: 'Descriptions',
        accessor: 'descriptions' // String-based value accessors!
      },
      {
        Header: 'Github',
        accessor: 'github' // String-based value accessors!
      }
    ];
    console.log(this.state)
    console.log(project_columns)
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <a href="https://github.com/linxuhao/ReactPersonalPage">Github</a>
        <Table
          data={this.state.project_data}
          columns={project_columns}
        />
      </div>
    );
  }
}