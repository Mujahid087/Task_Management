import clsx from "clsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, className }) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired, // Title is a required string
  className: PropTypes.string, // className is an optional string
};

Title.propTypes = {
  title: PropTypes.string.isRequired, // Title is a required string
  className: PropTypes.string, // className is an optional string
};

export default Title;