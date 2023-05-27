import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'; 
import './navbar.css';
import logo from '../../assets/assets/logo.svg';

const navbar = () => {
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'> 
          <img src={logo} alt='logo'/>

          </div>
          <div className='gpt3__navbar-links_container'>
            <p className='pon'> <a href='#home'> Home </a></p>
            <p> <a href='#wgpts'> What is GPT 3? </a></p>
            <p> <a href='#possibility'> Open AI </a></p>
            <p> <a href='#features'> Case Studies </a></p>
            <p> <a href='#blog'> Library </a></p>
        </div>
    </div>

    <div className='gpt3__navbar-sign'>
      <p> Sign in </p>
      <button type='button'> Sign up </button>

    </div>
    </div>
  )
}

export default navbar