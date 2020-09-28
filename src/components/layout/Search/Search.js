import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, setCurrent } from '../../../actions/postActions';
import { BiSearchAlt2 } from 'react-icons/bi';

import Spinner from '../Spinner/Spinner';

import '../ContactForm/ContactForm.css';

const Search = ({ post: { posts, loading }, getPosts, setCurrent }) => {
  useEffect(() => {
    getPosts();

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    // console.log(e.target.value) //value of search input

    let searchedPosts = [];

    const searchPosts = (post) => {
      if (post.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        searchedPosts.push(post);
        setCurrent(searchedPosts);
      }
    };

    posts.map((post) => {
      searchPosts(post);
    });

    // console.log(searchedPosts)
  };

  // console.log(posts)

  return (
    <Fragment>
      <div className="search-bar">
        <div className="search-group">
          <input
            type="search"
            name="search"
            placeholder="Search News & Events..."
            onChange={handleChange}
          />
        </div>
      </div>
    </Fragment>
  );
};

Search.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts, setCurrent })(Search);