import React from "react";
import SearchRow from "components/content/SearchRow";

import styles from "assets/styles/containers/Content.module.scss";

const Content = () => {
  return (
    <section className={styles["content-section"]}>
      <SearchRow frameStyles={styles["frame"]} />
    </section>
  );
};

export default Content;
