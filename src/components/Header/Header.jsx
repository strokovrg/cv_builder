import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './Header.scss'

import { Home } from '../../pages/Home'
import { CV } from '../../pages/CV'
import { Contacts } from '../../pages/Contacts'
import Profile from '../../pages/Profile'



const Header = () => {
  return (
    <>
      <header className='Header' >
        <div className='ui-container'>
          <div className='Header_content'>
            <span className='Header_logo'>Make your resume!</span>
            <a href='/'> Home </a>
            <a href='/cv_builder'> CV-Builder </a>
            <a href='/contacts'> Contacts </a>
            <a href='/profile'> Profile </a>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv_builder" element={<CV />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}


export default Header
