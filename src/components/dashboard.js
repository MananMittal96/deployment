import React, { Component } from 'react'
import ProjectList from './projectList'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard