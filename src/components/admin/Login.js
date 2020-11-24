import React, { useState, useEffect } from 'react'
import { Button } from '../layout/Button/Button'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

//* Redux
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/adminActions'

//* Components
import Spinner from '../../components/layout/Spinner/Spinner'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState('')
  const history = useHistory()

  const { loading, success, credentials, error } = useSelector(
    (state) => state.admin
  )

  useEffect(() => {
    if (success && credentials) {
      history.push('/admin-dashboard')
    }
    if (error) {
      setMessage('Invalid email or password. Please try again.')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }, [credentials, history, success])

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(email, password))
  }

  return (
    <LoginForm>
      <h1>Login</h1>
      {message && (
        <ErrorMessage>
          <p>{message}</p>
        </ErrorMessage>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />

          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type='submit' buttonSize='btn--wide' buttonColor='green'>
            Login
          </Button>
        </form>
      )}
    </LoginForm>
  )
}

const LoginForm = styled.div`
  max-width: 768px;
  margin: 2rem auto;
  padding: 0 10rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  form {
    width: 100%;
  }
  h1 {
    text-align: center;
  }
  button {
    width: 100%;
  }
`

const ErrorMessage = styled.div`
  width: 100%;
  height: 6vh;
  margin: 1rem 0;
  display: grid;
  place-items: center;
  background: #b90f0f;
  p {
    color: white;
    font-weight: 600;
  }
`

export default Login
