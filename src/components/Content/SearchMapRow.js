import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MapFrame from 'elements/MapFrame/MapFrame';
import InfoFrame from 'elements/InfoFrame/InfoFrame';
import TitleSmall from 'elements/TitleSmall/TitleSmall';
import Frame from 'elements/Frame/Frame';

import styles from './Content.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';

const SearchMapRow = (props) => {
  const dispatch = useDispatch();
  const searchedLocation = useSelector((state) => state.app.searchedLocation);

  return (
    <section className={styles['user-row']}>
      <Frame elementStyle={styles['map-frame']}>
        <MapFrame longitude={searchedLocation.longitude} latitude={searchedLocation.latitude} />
      </Frame>
      <Frame elementStyle={styles['info-frame']}>
        <TitleSmall text="Last search info" />
        <InfoFrame data={searchedLocation} />
      </Frame>
    </section>
  );
};

SearchMapRow.propTypes = {};

export default SearchMapRow;
