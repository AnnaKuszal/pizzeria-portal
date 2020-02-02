import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h3>Waiter view</h3>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/123`}>
      Order details
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
      Order new
    </Link>
  </div>
);

export default Waiter;