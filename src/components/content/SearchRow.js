import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';
import Frame from 'elements/Frame/Frame';

import PropTypes from 'prop-types';

import styles from './Content.module.scss';

import { validateSearch, getLocation } from 'helpers/locationSearch';

const SearchRow = ({ frameStyles }) => {
  const dispatch = useDispatch();
  const defaultSearchValue = useSelector((state) => state.app.defaultSearchValue);
  const previousSearches = useSelector((state) => state.app.previousSearches);

  const handleClick = async (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.formIpInput.value;
    if (validateSearch(inputValue)) {
      dispatch(AppActions.setLoading(true));
      const searchedLocation = await getLocation(inputValue);
      dispatch(AppActions.setSearchLocationData(searchedLocation));
      const lastSearch = previousSearches.length > 0 ? previousSearches[previousSearches.length - 1] : '';
      if (lastSearch.trim() !== inputValue.trim()) {
        dispatch(AppActions.addNewRecord(inputValue.trim()));
        if (previousSearches.length > 0) {
          sessionStorage.setItem('previousSearches', [sessionStorage.getItem('previousSearches'), inputValue.trim()].join(','));
        } else {
          sessionStorage.setItem('previousSearches', inputValue.trim());
        }
      }
      dispatch(AppActions.setLoading(false));
    } else {
      alert('Invalid IP address URL');
    }
  };

  return (
    <section className={styles['search-row']}>
      <Form onSubmit={handleClick} className={styles['search-row__form']}>
        <Frame elementStyle={[frameStyles, styles['search-row__form--input']].join(' ')}>
          <Form.Group controlId="formIpInput">
            <Form.Control type="search" placeholder="Enter IP address or URL" defaultValue={defaultSearchValue} required />
          </Form.Group>
        </Frame>
        <Button variant="secondary" type="submit" className={styles['search-row__form--button']}>
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
