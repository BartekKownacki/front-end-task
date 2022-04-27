import React, { useState, useEffect } from 'react';
import Frame from 'elements/Frame/Frame';
import Title from 'elements/Title/Title';
import Item from 'components/PreviousSearches/Item/Item';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store/app.actions';
import styles from 'assets/styles/containers/PreviousSearches.module.scss';
import { useSelector } from 'react-redux';

import { validateSearch, getLocation } from 'helpers/locationSearch';

const PreviousSearches = () => {
  const dispatch = useDispatch();
  const previousSearches = useSelector((state) => state.app.previousSearches);

  const handleClick = async (item) => {
    const inputValue = item;
    if (validateSearch(inputValue)) {
      dispatch(AppActions.setLoading(true));
      const searchedLocation = await getLocation(inputValue);
      dispatch(AppActions.setDefaultSeachValue(inputValue));
      dispatch(AppActions.setSearchLocationData(searchedLocation));
      dispatch(AppActions.setLoading(false));
    } else {
      alert('Invalid IP address URL');
    }
  };

  return (
    <Frame elementStyle={styles['frame']}>
      <Title text="Previous Searches" />
      <section className={styles['items-container']}>
        {previousSearches.length > 0 ? (
          previousSearches.map((item, index) => <Item key={index} item={item} onClick={() => handleClick(item)} />)
        ) : (
          <p>No previous searches</p>
        )}
      </section>
    </Frame>
  );
};

export default PreviousSearches;
