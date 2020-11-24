import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import Spinner from '../../layout/Spinner/Spinner'
import PropTypes from 'prop-types'
import { clearCurrent, getPosts } from '../../../redux/actions/postActions'

import './Blog.css'

const Posts = ({
  post: { posts, current, loading },
  getPosts,
  clearCurrent,
}) => {
  useEffect(() => {
    clearCurrent()
    getPosts()

    //eslint-disable-next-line
  }, [])

  if (loading || posts === null) {
    return <Spinner />
  }

  return (
    <Fragment>
      <div className='container d-flex'>
        {!loading && posts.length === 0 ? (
          <p className='center'>No posts to show...</p>
        ) : current.length === 1 ? (
          current.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
          posts.map((post) => <PostItem post={post} key={post.id} />)
        )}
      </div>
    </Fragment>
  )
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts, clearCurrent })(Posts)
