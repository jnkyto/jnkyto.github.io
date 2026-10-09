import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "The personal website of Joona Kytöniemi - kytonie.me",
  description = "Web designer and full-stack programmer with academic AI/ML experience. Building stable software aiming for the perfect mix of utility and design.",
  image = "https://kytonie.me/images/og-image.jpg",
  url,
  type = "website",
}) => {
  const location = useLocation();
  const currentUrl =
    url ||
    `https://kytonie.me${location.pathname === "/" ? "" : location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content={
          title.includes("The personal website")
            ? "Joona Kytöniemi | Full-Stack Web Development and Design"
            : title
        }
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

export default SEO;
