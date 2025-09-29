import meitsi from "../img/meitsi.webp";
import {FormattedMessage} from "react-intl";
import ProjectTable from "../components/Project/ProjectTable";
import ProjectEntry from "../components/Project/ProjectEntry";
import marumaru from "../img/marumaru.webp";
import sc from "../img/sc.webp";
import { LuClipboardCopy } from "react-icons/lu";
import React from "react";
import moment from "moment";

const pgp_key = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
  "\n" +
  "mDMEaBm7AxYJKwYBBAHaRw8BAQdA2VIahlYYYNcQX1UUHVzMSpbrHcgnL3fZnWgP\n" +
  "v+29tQW0JUpvb25hIEt5dMO2bmllbWkgPGtqb29uYUBvdXRsb29rLmNvbT6ImQQT\n" +
  "FgoAQRYhBEAl0/+GrSAOgQdm2jLRAX6g3tv8BQJoGbsDAhsDBQkFo5qABQsJCAcC\n" +
  "AiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEDLRAX6g3tv8zyIBAPUXHoq6EPE08Dv7\n" +
  "m8cCWyUqKjwhXK9O/A/NkrONYvsGAP44d0AkmV9XC1CeduUt7F+TAekUWurBCoFj\n" +
  "V7pCR75jC7g4BGgZuwMSCisGAQQBl1UBBQEBB0AKOMNrJeIWHb0yK7Yda8CYf5BQ\n" +
  "dLXWgUnJDBrVGYBrPAMBCAeIfgQYFgoAJhYhBEAl0/+GrSAOgQdm2jLRAX6g3tv8\n" +
  "BQJoGbsDAhsMBQkFo5qAAAoJEDLRAX6g3tv8iBwA/389RCaz5AAuIbY0JyLLc6nZ\n" +
  "nya+iWe60CVdnN9RpeX9AQCgvvgJYGV1COgXN4bIJoYUYhosx3z5KzG587aCfnix\n" +
  "AQ==\n" +
  "=D0Jj\n" +
  "-----END PGP PUBLIC KEY BLOCK-----"

const ClipboardIcon = LuClipboardCopy as React.ComponentType<React.SVGProps<SVGSVGElement>>;

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
            <li className="spacer" />
            <li className="east_side">
              <h1>🗣️&nbsp;&nbsp;<FormattedMessage id='information' defaultMessage="Work in progress"/>&nbsp;&nbsp;ℹ️</h1>
              <div className="code_block">
                <p>name = "Joona Kytöniemi";</p>
                <p>age = {moment("20000428", "YYYYMMDD").fromNow().slice(0,2)};</p>
                <p>location = "Turku, Finland";</p>
                <p>occupation = ["research assistant", "student"];</p>
                <p>hobbies = "too many";</p>
                <button onClick={() => {
                  navigator.clipboard.writeText(pgp_key).then(r => null)
                }}>
                  <div style={{display: "inline-flex", margin: "auto"}}>
                    <ClipboardIcon style={{width: 16, height: 16, marginRight: 4}}/>
                    <p style={{margin: "auto", fontFamily: "sans-serif"}}><FormattedMessage id="gpg.copy" defaultMessage="Copy PGP-key"/></p>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*
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
      */}
  </div>
  )
}

export default Home;