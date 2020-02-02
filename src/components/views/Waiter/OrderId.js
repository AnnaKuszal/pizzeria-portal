import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const OrderId = ({match}) => (
  <div className={styles.component}>
    <h3>Order details</h3>
    <p>Order ID -</p>
    <span>{match.params.id}</span>
  </div>
);

OrderId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default OrderId;