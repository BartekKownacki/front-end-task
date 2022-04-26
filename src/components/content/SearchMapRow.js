import React, { useEffect } from "react";
import PropTypes from "prop-types";

import MapFrame from "elements/MapFrame/MapFrame";
import InfoFrame from "elements/InfoFrame/InfoFrame";
import TitleSmall from "elements/TitleSmall/TitleSmall";
import Frame from "elements/Frame/Frame";

import styles from "./Content.module.scss";

const SearchMapRow = (props) => {
  return (
    <section className={styles["user-row"]}>
      <Frame elementStyle={styles["map-frame"]}>
        <MapFrame />
      </Frame>
      <Frame elementStyle={styles["info-frame"]}>
        <TitleSmall text="Search info" />
        <InfoFrame />
      </Frame>
    </section>
  );
};

SearchMapRow.propTypes = {};

export default SearchMapRow;
