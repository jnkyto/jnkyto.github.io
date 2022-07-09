import {FormattedMessage} from "react-intl";
import React from "react";
import "./ProjectEntry.css"

const ProjectEntry = ({link, image, img_alt, headline, msg_key}) => {
  return (
    <li className="proj_entry">
      <div className="proj_entry_container">
        <a href={link}>
          <img src={image} id="project_logo" title={img_alt} alt={img_alt} loading="lazy"/>
        </a>
      </div>
      <h3>{headline}</h3>
      <p><FormattedMessage id={msg_key} defaultMessage={msg_key}/></p>
    </li>
  )
}

export default ProjectEntry;