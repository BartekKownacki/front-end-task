import React from "react";
import PropTypes from "prop-types";

import styles from "./Item.module.scss";

const Item = ({ item }) => {
  return <div className={styles["item"]}>{item}</div>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
