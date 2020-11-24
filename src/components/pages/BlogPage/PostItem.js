import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '../../layout/Button/Button'
import '../../layout/Button/Button.css'
import './Blog.css'
import { getPost, setCurrent } from '../../../redux/actions/postActions'

function PostItem({ post, setCurrent, current }) {
  const fetchPost = () => {
    getPost(post.id)
    setCurrent(post)
    return current
  }

  return (
    <Fragment>
      {/* PostItem will go here */}
      <div className='card' style={{ width: '18rem' }}>
        <img src={post.images[0].url} className='card-img-top' alt='' />
        <div className='card-body'>
          <h3 className='card-title'>{post.title}</h3>
          <p className='card-text'>{post.description}</p>
          <Link to={`posts/${post.id}`} onClick={fetchPost}>
            {/* Link above will go to individual post */}
            <Button buttonSize='btn--medium' buttonColor='red' class='btn'>
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { setCurrent })(PostItem)
