import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';

import Frame from 'elements/Frame/Frame';
import Title from 'elements/Title/Title';
import Item from 'components/PreviousSearches/Item/Item';
import { validateSearch } from 'helpers/locationSearch';
import { get } from 'services/api';

import styles from 'assets/styles/containers/PreviousSearches.module.scss';

const PreviousSearches = () => {
  const dispatch = useDispatch();
  const previousSearches = useSelector((state) => state.app.previousSearches);
  const isApiError = useSelector((state) => state.app.apiError);

  const handleClick = async (item) => {
    if (!isApiError) {
      const inputValue = item;
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
          dispatch(AppActions.setDefaultSeachValue(inputValue));
          dispatch(AppActions.setSearchLocationData(searchedLocation));
          dispatch(AppActions.setLoading(false));
        });
      } else {
        alert('Invalid IP address URL');
      }
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
