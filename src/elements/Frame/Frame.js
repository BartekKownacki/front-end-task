import React, { Children } from "react";
import PropTypes from "prop-types";
import styles from "./Frame.module.scss";

const Frame = ({ children, elementStyle }) => {
  return (
    <section
      className={`${styles["frame"]} ${elementStyle ? elementStyle : ""}`}
    >
      {children}
    </section>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  elementStyle: PropTypes.string,
};

export default Frame;
