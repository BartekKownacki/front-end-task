import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from 'store/app.actions';

import PreviousSearches from './PreviousSearches';
import Content from './Content';
import ErrorRow from './ErrorRow';

import styles from 'assets/styles/containers/Main.module.scss';

const Main = () => {
  const dispatch = useDispatch();
  const apiError = useSelector((state) => state.app.apiError);

  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem('previousSearches');
    if (sessionStorageData) {
      dispatch(AppActions.restoreRecords(sessionStorageData.split(',')));
    }
  }, [dispatch]);

  return (
    <Container className={styles['container']}>
      {apiError && <ErrorRow />}
      <PreviousSearches />
      <Content />
    </Container>
  );
};

export default Main;
