import meitsi from "../img/meitsi.webp";
import { FormattedMessage } from "react-intl";
import { LuClipboardCopy } from "react-icons/lu";
import React, { useState } from "react";
import moment from "moment";
import "./Home.css";

const pgp_key =
  "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
  "\n" +
  "mDMEaaVhlRYJKwYBBAHaRw8BAQdARwQaWxC7KZ31yecWwm1lahamX4QTTjohH4nA\n" +
  "Vm0AppW0L0pvb25hIEt5dMO2bmllbWkgKHR3ci1mZHIpIDxram9vbmFAb3V0bG9v\n" +
  "ay5jb20+iJkEExYKAEEWIQTxhK53TPdUwQins7xcnmR3Qy6nyAUCaaVhlQIbAwUJ\n" +
  "DwmcAAULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRBcnmR3Qy6nyKbxAQD5\n" +
  "DiwlzpqEb1aqf4z8nWLpez20JhgoF+xNpXkx4A3QqgD9GX/XffqwBH63rBV0YJug\n" +
  "s+R0QjukqdzRe6AU2KnETga4OARppWGVEgorBgEEAZdVAQUBAQdAuhfPMLKh4+v4\n" +
  "zQt8QNU42xitdw0AIzulB4hdlBbsxmIDAQgHiH4EGBYKACYWIQTxhK53TPdUwQin\n" +
  "s7xcnmR3Qy6nyAUCaaVhlQIbDAUJDwmcAAAKCRBcnmR3Qy6nyLS5AQDo5OP+ZTYB\n" +
  "dVBkqlIrt3WbC9Kc6CGJvQAVzquEWS6hRwD8CkQcLRh3TSkTnhQR6U+ovovS31fU\n" +
  "fML7QD3w1CjobAc=\n" +
  "=an53\n" +
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
                    <p style={{ margin: "auto", fontFamily: "sans-serif" }}>
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
