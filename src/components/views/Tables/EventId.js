import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const EventId = ({match}) => (
  <div className={styles.component}>
    <h3>Event details</h3>
    <p>Event ID -</p>
    <span>{match.params.id}</span>
  </div>
);

EventId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default EventId;