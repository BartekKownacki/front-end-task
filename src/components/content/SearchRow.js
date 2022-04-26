import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppActions } from "store/app.actions";
import Frame from "elements/Frame/Frame";

import PropTypes from "prop-types";

import styles from "./Content.module.scss";

const SearchRow = ({ frameStyles }) => {
  const dispatch = useDispatch();
  const ipv4Regex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  const handleClick = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.formIpInput.value;
    if (validateSearch(inputValue)) {
      sessionStorage.setItem(
        "previousSearches",
        [sessionStorage.getItem("previousSearches"), inputValue].join(",")
      );
      dispatch(AppActions.addNewRecord(inputValue));
    } else {
      alert("Invalid IP address URL");
    }
  };

  const validateSearch = (value) => {
    if (ipv4Regex.test(value) || urlRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className={styles["search-row"]}>
      <Form onSubmit={handleClick} className={styles["search-row__form"]}>
        <Frame
          elementStyle={[frameStyles, styles["search-row__form--input"]].join(
            " "
          )}
        >
          <Form.Group controlId="formIpInput">
            <Form.Control type="search" placeholder="Enter IP address or URL" />
          </Form.Group>
        </Frame>
        <Button
          variant="secondary"
          type="submit"
          className={styles["search-row__form--button"]}
        >
          Submit
        </Button>
      </Form>
    </section>
  );
};

SearchRow.propTypes = {
  styles: PropTypes.string,
};

export default SearchRow;