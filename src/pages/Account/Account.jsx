import React from 'react'
import './Account.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'


function Account() {
    const navigate = useNavigate()

    // Get the user Date
    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)

        navigate('/')
    }

    

  return (
    <div className='account-page'>
        <div className='account-container'>
            <p><span>Username:</span> {user?.displayName}</p>
            <p><span>Email:</span> {user?.email}</p>
            <button className='logout' onClick={handleLogout}>Log out</button>
        </div>
    </div>
  )
}

export default Account