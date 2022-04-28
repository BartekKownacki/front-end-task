import React from 'react';

import Frame from 'elements/Frame/Frame';
import TitleSmall from 'elements/TitleSmall/TitleSmall';

import styles from 'assets/styles/containers/ErrorRow.module.scss';

const ErrorRow = () => {
  return (
    <section className={styles['error-row']}>
      <Frame elementStyle={styles['error-row--frame']}>
        <TitleSmall text="An error occurred" />
        <p> The API returned an error. Please try again later. </p>
      </Frame>
    </section>
  );
};

export default ErrorRow;
