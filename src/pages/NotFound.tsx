import { FormattedMessage } from "react-intl";
import SEO from "../components/SEO";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <SEO title="404 Not Found - kytonie.me" />
      <div className="notfound-container">
        <h1 className="notfound-title">
          <FormattedMessage id="notfound.title" />
        </h1>
        <p className="notfound-message">
          <FormattedMessage id="notfound.message" />
        </p>
      </div>
    </div>
  );
};

export default NotFound;
