import React from 'react'

const ProjectList = () => {
  return (
    <div className="project-list section">

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Customer Management System</span>
          <p>Project for Uber</p>
          <p className="grey-text">21st November, 2018</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Warehouse Management System</span>
          <p>Project for Walmart</p>
          <p className="grey-text">22nd November, 2019</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Order Management System</span>
          <p>Project for Amazon</p>
          <p className="grey-text">23rd November, 2020</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectList