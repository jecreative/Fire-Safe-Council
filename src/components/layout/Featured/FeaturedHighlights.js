import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { getFeaturedPosts, getEvents } from '../../../actions/postActions';

import FeaturedNewsList from './FeaturedNewsList';
import FeaturedEvents from './FeaturedEvents';

import './FeaturedEvents.css';

const FeaturedHighlights = ({
  post: { featuredPosts, events, loading },
  getFeaturedPosts,
  getEvents,
}) => {
  useEffect(() => {
    getEvents();
    getFeaturedPosts();

    //eslint-disable-next-line
  }, []);

  // console.log(events);

  if (loading || featuredPosts === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="row">
          <div className="col">
            <h2 className="news-title">What's New</h2>
            <hr />
            <br />
            {!loading && featuredPosts.length === 0 ? (
              <p>No New Events/News</p>
            ) : (
              featuredPosts.map((post) => (
                <FeaturedNewsList post={post} key={post.id} />
              ))
            )}
          </div>
          <div className="col">
            <h2 className="events-title">Upcoming Events</h2>
            <hr />
            <br />
            {!loading && events.length === 0 ? (
              <p>No New Events/News</p>
            ) : (
              events.map((event) => (
                <FeaturedEvents event={event} key={event.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FeaturedHighlights.propTypes = {
  post: PropTypes.object.isRequired,
  getFeaturedPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getFeaturedPosts, getEvents })(
  FeaturedHighlights
);
