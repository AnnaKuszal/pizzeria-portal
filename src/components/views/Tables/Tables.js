import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h3>Tables view</h3>
    
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/222`}>
      Booking details
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
      Booking new
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/333`}>
      Event details
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>
      Event new
    </Link>
  </div>
);

export default Tables;