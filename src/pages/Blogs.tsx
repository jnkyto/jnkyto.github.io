import "./Blogs.css"
import {FormattedMessage} from "react-intl";
import React from "react";

const Blogs = () => {
  return (
    <div className={"blogs_container"}>
      <div className={"blogs_root"}>
        <h1 style={{color: "white", textAlign: "center"}}>
          <div>
            <h3><FormattedMessage id={"nothing.here"} /></h3>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Blogs;