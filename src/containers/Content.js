import React from 'react';

import SearchRow from 'components/Content/SearchRow';
import UserRow from 'components/Content/UserRow';
import SearchMapRow from 'components/Content/SearchMapRow';

import styles from 'assets/styles/containers/Content.module.scss';

const Content = () => {
  return (
    <section className={styles['content-section']}>
      <UserRow frameStyles={styles['frame']} />
      <SearchRow frameStyles={styles['frame']} />
      <SearchMapRow frameStyles={styles['frame']} />
    </section>
  );
};

export default Content;
