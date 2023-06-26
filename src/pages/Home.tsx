import meitsi from "../img/meitsi.webp";
import {FormattedMessage} from "react-intl";
import ProjectTable from "../components/Project/ProjectTable";
import ProjectEntry from "../components/Project/ProjectEntry";
import marumaru from "../img/marumaru.webp";
import sc from "../img/sc.webp";
import React from "react";
import moment from "moment";

const Home = () => {
  return (
    <div className="home">
      <div className="main_root">
        <div className="main_container">
          <ul className="main_table">
            <li className="west_side">
              <img src={meitsi} id="meitsi" title="Me, looking at the camera with a stupid suprised smile."
                   alt="Me, looking at the camera with a stupid suprised smile." loading="lazy"/>
            </li>
            <li className="east_side">
              <h1>👷&nbsp;<FormattedMessage id='work.in.progress' defaultMessage="Work in progress"/>&nbsp;🛠️</h1>
              <div className="code_block">
                <p>name = "Joona Kytöniemi";</p>
                <p>age = {moment("20000428", "YYYYMMDD").fromNow().slice(0,2)};</p>
                <p>occupation = "CSE student";</p>
                <p>location = "Turku, Finland";</p>
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