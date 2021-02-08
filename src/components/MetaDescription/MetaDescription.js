import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const MetaDescription = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords.join(", ")} data-rh="true" />
    </Helmet>
  );
};

MetaDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MetaDescription;
