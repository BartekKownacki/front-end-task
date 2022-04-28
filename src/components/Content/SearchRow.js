import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';

import Frame from 'elements/Frame/Frame';
import { get } from 'services/api';
import { validateSearch } from 'helpers/locationSearch';

import styles from './Content.module.scss';

const SearchRow = ({ frameStyles }) => {
  const dispatch = useDispatch();
  const defaultSearchValue = useSelector((state) => state.app.defaultSearchValue);
  const previousSearches = useSelector((state) => state.app.previousSearches);

  const handleClick = async (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.formIpInput.value;
    if (validateSearch(inputValue)) {
      dispatch(AppActions.setLoading(true));
      get(inputValue).then((res) => {
        if (!res) {
          return;
        }
        const searchedLocation = {
          ip: res.ip,
          country: res.country_name,
          continent: res.continent_name,
          city: res.city,
          capital: res.location.capital,
          latitude: res.latitude,
          longitude: res.longitude,
        };
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
      });
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
