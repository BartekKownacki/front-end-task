import React, { useState, useEffect } from "react";
import Frame from "elements/Frame/Frame";
import Title from "elements/Title/Title";
import Item from "components/PreviousSearches/Item/Item";

import styles from "assets/styles/containers/PreviousSearches.module.scss";
import { useSelector } from "react-redux";

const PreviousSearches = () => {
  const previousSearches = useSelector((state) => state.app.previousSearches);

  return (
    <Frame elementStyle={styles["frame"]}>
      <Title text="Previous Searches" />
      <section className={styles["items-container"]}>
        {previousSearches &&
          previousSearches.map((item, index) => (
            <Item key={index} item={item} />
          ))}
      </section>
    </Frame>
  );
};

export default PreviousSearches;
