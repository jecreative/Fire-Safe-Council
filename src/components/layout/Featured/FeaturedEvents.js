import React, { Fragment } from 'react';

import { Button } from '../Button/Button';
import '../Button/Button.css';
import './Card.css';
import './FeaturedEvents.css';

const FeaturedEvents = ({ event }) => {
  return (
    <Fragment>
      <div className="d-flex">
        <div className="event">
          {' '}
          <h1>{event.title}</h1>
          <p className="card-text">
            {event.body ? event.body.slice(0, 250) : ''}...
          </p>
          <Button
            buttonSize="btn--small"
            buttonColor="green"
            className="btn"
            style={{ marginBottom: '2rem' }}
          >
            Read More
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedEvents;
