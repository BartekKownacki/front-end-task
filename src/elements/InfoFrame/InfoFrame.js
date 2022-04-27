import React, { useState } from 'react';
import PropTypes from 'prop-types';

import infoFields from 'assets/constants/infoFields';
import { useSelector } from 'react-redux';

import styles from './InfoFrame.module.scss';

import Loading from 'elements/Loading/Loading';

const InfoFrame = ({ data }) => {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <>
      {isLoading ? (
        <section className={styles['loading']}>
          <Loading />
        </section>
      ) : data.ip.length > 0 ? (
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

export default InfoFrame;
