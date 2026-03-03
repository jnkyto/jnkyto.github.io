import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./NotFound.css";

const NotFound = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="notfound">
      <div className="notfound-container">
        <h1 className="notfound-title">
          <FormattedMessage id="notfound.title" />
        </h1>
        <p className="notfound-message">
          <FormattedMessage id="notfound.message" />
        </p>
        <p className="notfound-redirect">
          <FormattedMessage id="notfound.redirect" values={{ seconds }} />
        </p>
      </div>
    </div>
  );
};

export default NotFound;
