import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../layout/Button/Button'

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found'
  }, [])
  return (
    <div
      className='container'
      style={{
        textAlign: 'center',
        boxShadow: 'rgba(0,0,0,1)',
        margin: '50px auto',
        padding: '8rem 2rem',
      }}
    >
      <h1>Page Not Found</h1>
      <Link to='/'>
        <Button
          buttonSize='btn--sm'
          buttonColor='green'
          style={{ width: '50%', margin: '0 auto' }}
        >
          Back to Home Page
        </Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
