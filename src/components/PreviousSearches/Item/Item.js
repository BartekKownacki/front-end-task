import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({ item, onClick }) => {
  return (
    <div onClick={onClick} className={styles['item']}>
      {item}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
