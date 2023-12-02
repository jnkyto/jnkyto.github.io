import meitsi from "../img/meitsi.webp";
import {FormattedMessage} from "react-intl";
import ProjectTable from "../components/Project/ProjectTable";
import ProjectEntry from "../components/Project/ProjectEntry";
import marumaru from "../img/marumaru.webp";
import sc from "../img/sc.webp";
import React from "react";
import moment from "moment";

const Home = () => {
  moment.relativeTimeRounding(Math.floor)
  return (
    <div className="home">
      <div className="main_root">
        <div className="main_container">
          <ul className="main_table">
            <li className="west_side">
              <img src={meitsi} id="meitsi" title="Me, posing for the camera like a big dumbo with Tokyo skyline on the background"
                   alt="Me, posing for the camera like a big dumbo with Tokyo skyline on the background" loading="lazy"/>
            </li>
            <li className="east_side">
              <h1>🗣️&nbsp;&nbsp;<FormattedMessage id='information' defaultMessage="Work in progress"/>&nbsp;&nbsp;ℹ️</h1>
              <div className="code_block">
                <p>name = "Joona Kytöniemi";</p>
                <p>age = {moment("20000428", "YYYYMMDD").fromNow().slice(0,2)};</p>
                <p>location = "Turku, Finland";</p>
                <p>occupation = ["research assistant", "student"];</p>
                <p>hobbies = "too many"</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <div className="divider"/>
    <div className="bread">
      <h1><FormattedMessage id='bread.projects' defaultMessage="Projects:"/></h1>
      <ProjectTable>
        <ProjectEntry
          link={"https://marumaru.fi"}
          image={marumaru}
          img_alt="Logo of marumaru.fi"
          headline="marumaru"
          msg_key="project.marumaru" />
        <ProjectEntry
          link={"https://soundcloud.com"}
          image={sc}
          img_alt="Logo of Soundcloud"
          headline="music"
          msg_key="project.music" />
      </ProjectTable>
    </div>
  </div>
  )
}

export default Home;