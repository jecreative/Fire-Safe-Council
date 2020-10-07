import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../layout/Button/Button'

const NotFoundPage = () => {
  return (
    <div
      className='container'
      style={{
        textAlign: 'center',
        boxShadow: 'rgba(0,0,0,1)',
        margin: '50px auto',
        padding: '10rem',
      }}
    >
      <h1>404 Page Not Found</h1>
      <Link to='/'>
        <Button
          buttonSize='btn--wide'
          buttonColor='green'
          style={{ width: '100%', margin: '0 auto' }}
        >
          Back to Home Page
        </Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
