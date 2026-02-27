import meitsi from "../img/meitsi.webp";
import { FormattedMessage } from "react-intl";
import { LuClipboardCopy } from "react-icons/lu";
import React, { useState } from "react";
import moment from "moment";
import "./Home.css";

const pgp_key =
  "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
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
  "-----END PGP PUBLIC KEY BLOCK-----";

const ClipboardIcon = LuClipboardCopy as React.ComponentType<
  React.SVGProps<SVGSVGElement>
>;

const Home = () => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  moment.relativeTimeRounding(Math.floor);
  return (
    <div className="home">
      <div className="main_root">
        <div className="main_container">
          <ul className="main_table">
            <li className="west_side">
              <img
                src={meitsi}
                id="meitsi"
                title="Me, back turned to the camera, looking towards Lake Bled in Slovenia"
                alt="Me, back turned to the camera, looking towards Lake Bled in Slovenia"
                loading="lazy"
              />
            </li>
            <li className="spacer" />
            <li className="east_side">
              <h1>
                🗣️&nbsp;&nbsp;
                <FormattedMessage
                  id="information"
                  defaultMessage="Work in progress"
                />
                &nbsp;&nbsp;ℹ️
              </h1>
              <div className="code_block">
                <p>
                  <FormattedMessage id="bio.name" defaultMessage="" />
                </p>
                <p>
                  <FormattedMessage id="bio.age" defaultMessage="" />
                  <span style={{ fontFamily: "Courier" }}>
                    {moment("20000428", "YYYYMMDD").fromNow().slice(0, 2)}
                  </span>
                </p>
                <p>
                  <FormattedMessage id="bio.location" defaultMessage="" />
                </p>
                <p>
                  <FormattedMessage id="bio.occupation" defaultMessage="" />
                </p>
                <p>
                  <FormattedMessage id="bio.hobbies" defaultMessage="" />
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(pgp_key).then(() => {
                      setShowCopyNotification(true);
                      setTimeout(() => setShowCopyNotification(false), 2000);
                    });
                  }}
                  style={{ position: "relative" }}
                >
                  <div style={{ display: "inline-flex", margin: "auto" }}>
                    <ClipboardIcon
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    />
                    <p style={{ margin: "auto", fontFamily: "sans-serif" }}>
                      <FormattedMessage
                        id="gpg.copy"
                        defaultMessage="Copy PGP-key"
                      />
                    </p>
                  </div>
                  {showCopyNotification && (
                    <div className="copy-notification-popup">
                      <FormattedMessage
                        id="gpg.copied"
                        defaultMessage="Copied"
                      />
                    </div>
                  )}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
