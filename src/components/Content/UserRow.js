import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';

import MapFrame from 'elements/MapFrame/MapFrame';
import InfoFrame from 'elements/InfoFrame/InfoFrame';
import TitleSmall from 'elements/TitleSmall/TitleSmall';
import Frame from 'elements/Frame/Frame';
import { get } from 'services/api';

import styles from './Content.module.scss';

const UserRow = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.app.userData);
  useEffect(() => {
    dispatch(AppActions.setUserLoading(true));
    get('check').then((res) => {
      const userDataToDispatch = {
        ip: res.ip,
        country: res.country_name,
        continent: res.continent_name,
        city: res.city,
        capital: res.location.capital,
        latitude: res.latitude,
        longitude: res.longitude,
      };
      dispatch(AppActions.setUserData(userDataToDispatch));
      dispatch(AppActions.setUserLoading(false));
    });
  }, [dispatch]);

  return (
    <section className={styles['user-row']}>
      <Frame elementStyle={styles['map-frame']}>
        <MapFrame longitude={userData.longitude} latitude={userData.latitude} />
      </Frame>
      <Frame elementStyle={styles['info-frame']}>
        <TitleSmall text="User info" />
        <InfoFrame data={userData} isUserLocation={true} />
      </Frame>
    </section>
  );
};

export default UserRow;
