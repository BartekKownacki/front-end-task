import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import infoFields from 'assets/constants/infoFields';
import Loading from 'elements/Loading/Loading';

import styles from './InfoFrame.module.scss';

const InfoFrame = ({ data, isUserLocation }) => {
  const isLoading = useSelector((state) => (isUserLocation ? state.app.isUserLoading : state.app.isLoading));
  const apiError = useSelector((state) => state.app.apiError);

  return (
    <>
      {isLoading || apiError ? (
        <section className={styles['loading']}>
          <Loading />
        </section>
      ) : data.ip ? (
        <section className={styles['info']}>
          {infoFields.map((field, index) => (
            <div key={index} className={styles['info__field']}>
              <div className={styles['info__field--name']}>{field.name}: </div>
              <div className={styles['info__field--value']}>{data[field.key] !== null ? data[field.key] : '-'}</div>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles['loading']}>
          <p>Waiting for search...</p>
        </section>
      )}
    </>
  );
};

InfoFrame.propTypes = {
  data: PropTypes.object.isRequired,
  isUserLocation: PropTypes.bool,
};

export default InfoFrame;
