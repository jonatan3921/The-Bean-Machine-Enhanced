import React from 'react'
import './Footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer-container'>
        <p>Find us on social media</p>
        <div className='icon-container'>
            <a href=""><AiFillGithub className='icon'/></a>
            <a href=""><BsTwitter className='icon'/></a>
            <a href=""><BsFacebook className='icon'/></a>
        </div>
    </div>
  )
}

export default Footer