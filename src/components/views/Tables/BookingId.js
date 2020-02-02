import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const BookingId = ({match}) => (
  <div className={styles.component}>
    <h3>Booking details</h3>
    <p>Booking ID -</p>
    <span>{match.params.id}</span>
  </div>
);

BookingId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default BookingId;