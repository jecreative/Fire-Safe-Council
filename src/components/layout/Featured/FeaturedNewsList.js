import React, { Fragment } from 'react';

import { Button } from '../Button/Button';
import '../Button/Button.css';

const FeaturedNewsList = ({ post }) => {
  return (
    <Fragment>
      <h1>{post.title}</h1>
      <p>{post.body ? post.body.slice(0, 250) : ''}...</p>
      <Button buttonSize="btn--medium" buttonColor="red" class="btn">
        Read More
      </Button>
    </Fragment>
  );
};

export default FeaturedNewsList;
