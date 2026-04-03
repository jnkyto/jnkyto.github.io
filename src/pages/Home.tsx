import meitsi from "../img/meitsi.webp";
import { FormattedMessage } from "react-intl";
import { LuClipboardCopy } from "react-icons/lu";
import React, { useState } from "react";
import moment from "moment";
import "./Home.css";

const pgp_key =
  "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
  "\n" +
  "mDMEac+QlxYJKwYBBAHaRw8BAQdAG+D9KrhT8nPkM1it9b8VXGc5ziF/OQDXaFPR\n" +
  "7Hf4EVK0WUpvb25hIEt5dMO2bmllbWkgKENoZWNrIGh0dHBzOi8va3l0b25pZS5t\n" +
  "ZS8gZm9yIGFuIHVwZGF0ZWQgR1BHLWtleS4pIDxram9vbmFAb3V0bG9vay5jb20+\n" +
  "iJkEExYKAEEWIQRhx9sNdrgDTVfYNbGkttD/uRLCLwUCac+QlwIbAwUJCWYBgAUL\n" +
  "CQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRCkttD/uRLCL9woAQDUtev2UFPZ\n" +
  "ZyQFQITmFo2yriw5NXtbsn/Q67YIyrX5nAD7BGQFkVSY3B6ZwMPcVy0UIckYcldl\n" +
  "WhFzN0WlmWWkTQW4OARpz5CXEgorBgEEAZdVAQUBAQdA3TLgTreWQm/S9YWXqGIR\n" +
  "DfPhj105+SKdM6ymp9Bmrz0DAQgHiH4EGBYKACYWIQRhx9sNdrgDTVfYNbGkttD/\n" +
  "uRLCLwUCac+QlwIbDAUJCWYBgAAKCRCkttD/uRLCL250AQC5VtbbXvoeD7YVuTHP\n" +
  "mtFZlH3gyOxmYL18WudxZPGOLwD/SgNs7uxTPJ5BqL/lW3p2NrT3DntydNZOp7jc\n" +
  "xs3POgA=\n" +
  "=Nqp9\n" +
  "-----END PGP PUBLIC KEY BLOCK-----\n";

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
                    <p
                      style={{
                        margin: "auto",
                        fontFamily: "sans-serif",
                        fontSize: 14,
                      }}
                    >
                      <FormattedMessage
                        id="gpg.copy"
                        defaultMessage="Copy GPG-key"
                      />
                    </p>
                  </div>
                  {showCopyNotification && (
                    <div className="copy-notification-popup">
                      {"✔ "}️
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
