import React from "react";
import PropTypes from "prop-types";

import styles from "./TitleSmall.module.scss";

const TitleSmall = ({ text }) => {
  return <h3 className={styles["title"]}>{text}</h3>;
};

TitleSmall.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleSmall;
