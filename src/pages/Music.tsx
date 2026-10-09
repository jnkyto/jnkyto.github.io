import React from "react";
import "./Music.css";
import { FormattedMessage } from "react-intl";
import SEO from "../components/SEO";

const Music = () => {
  return (
    <div className={"full_screen_container"}>
      <SEO title="Music - kytonie.me" />
      <h1 className={"music_wip_text"}>
        <FormattedMessage id={"work.in.progress"}></FormattedMessage>
      </h1>
    </div>
  );
};

export default Music;
