import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.number,
  subtitle: PropTypes.string,
};
FirstApp.defaultProps = {
  title: "No hay ningun title ",
  subtitle: "No hay subtitle",
};
