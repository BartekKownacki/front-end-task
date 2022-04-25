import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import PreviousSearches from "./PreviousSearches";
import Content from "./Content";

import { useDispatch } from "react-redux";
import { AppActions } from "store/app.actions";

import styles from "assets/styles/containers/Main.module.scss";

const Main = () => {
  const dispatch = useDispatch();

  //restore session
  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem("previousSearches");
    if (sessionStorageData) {
      dispatch(AppActions.restoreRecords(sessionStorageData.split(",")));
    }
  });

  return (
    <Container className={styles["container"]}>
      <PreviousSearches />
      <Content />
    </Container>
  );
};

export default Main;
