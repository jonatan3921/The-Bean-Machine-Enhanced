import React, {useState, useEffect} from 'react'
import './SignUp.css'
import {auth} from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [existingUser, setExistingUser] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
      // Add the username as displayName
      updateProfile(auth.currentUser, {displayName: name})

      navigate('/')
    })
    .catch(err => console.log(err))
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // Login
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      navigate('/')
    })
    .catch(err => {
      alert("We are sorry, But You can not log in at this moment.")
    })
  }


  return (
    <div className='signup-page'>
      <div className='signup-container'>
        {
          existingUser
          ? <form className='auth-form' onSubmit={handleLogin}>
            <h1>Login with your email</h1>
            <div className='form-group'>
              <input type='email' placeholder='Enter your email' required onChange={e => setEmail(e.target.value)}/>
              <input type='password' placeholder='Enter your password' required onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
            <p>Don't have an account? <span className='form-link' onClick={() => setExistingUser(!existingUser)}>Sign up</span>
            </p>
          </form>

          : <form className='auth-form' onSubmit={handleSignup}>
            <h1>Sign up with us to enjoy for free.</h1>
            <p>Enjoy the benefits of our products and share your thoughts with us.</p>
            <div className='form-group'>

              <label htmlFor='name'>Name:</label>
              <input id='name' type='text' placeholder='Enter your name' required onChange={e => setName(e.target.value)} value={name}/>

              <label htmlFor='email'>Email:</label>
              <input id='email' type='email' placeholder='Enter your email' required
              onChange={e => setEmail(e.target.value)}
              value={email}/>

              <label htmlFor='password'>Password:</label>
              <input id='password' type='password'
              placeholder='Enter your password' required onChange={e => setPassword(e.target.value)} value={password}/>

            </div>
            <button type='submit'>Sign up</button>
            <p>Already have an account? <span className='form-link' onClick={() => setExistingUser(!existingUser)}>Login</span></p>
          </form>
        }
      </div>
    </div>
  )
}

export default SignUp