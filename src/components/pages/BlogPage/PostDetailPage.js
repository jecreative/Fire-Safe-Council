import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';
import { getPosts } from '../../../actions/postActions';

const PostDetailPage = ({ post: { current, loading }, getPost }) => {
  // Persist Current in LocalStorage and fetch as postItem
  if (current !== null) {
    let item = 'post';
    localStorage.setItem(item, JSON.stringify(current));
  }
  let postItem = JSON.parse(localStorage.getItem('post'));
  console.log(postItem);

  const { title, body, description, date, images } = postItem;

  console.log();

  return (
    <Fragment>
      {/* Look into creating a comment box | Going to need storage for the comments  */}
      {/* Pagination??? */}

      <div className="post__hero-section">
        <div className="container">
          <div
            className="row post__hero-row"
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className="col">
              <div className="post__hero-text-wrapper">
                <div className="top-line">{title}</div>
                <h1 className="heading dark">{title}</h1>

                <ReactMarkdown
                  className="post__hero-subtitle dark"
                  source={body}
                  escapeHtml={false}
                />
              </div>
            </div>
            <div className="col">
              <div className="post__hero-img-wrapper">
                <img src={images[0].url} alt="" className="post__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(PostDetailPage);
