import "./Blogs.css"
import {FormattedMessage} from "react-intl";

const Blogs = () => {
  return (
    <div className={"blogs_container"}>
      <div className={"blogs_root"}>
        <h1 style={{color: "white", textAlign: "center"}}>
          <FormattedMessage id={"nothing.here"} defaultMessage={"Nothing here"} />
        </h1>
      </div>
    </div>
  )
}

export default Blogs;