import React from "react";
import "./Music.css"
import {FormattedMessage} from "react-intl";

const Music = () => {
  const sc_embed = `<iframe width="630" height="630" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1514452129&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>`
  return (
    <div className={"music_container"}>
      <div className={"music_root"} dangerouslySetInnerHTML={{__html: sc_embed}}>
      </div>
      <div>
        <p><FormattedMessage id={"music.info"}/></p>
      </div>
    </div>
  )
}

export default Music;