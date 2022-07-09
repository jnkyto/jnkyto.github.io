import "./ProjectTable.css"

import React from "react";

const ProjectTable = ({children}) => {
  return (
    <ul className="proj_table">
      {children}
    </ul>
  )
}

export default ProjectTable;