import React from 'react';
import './Header.css'

// import { Container } from './styles';

function Header({black}) {
  return (
      <header className={black ? 'black' : ''}>
          <div className="header--logo">
            <a href="/">
              <img src="https://cdn.theatlantic.com/assets/media/img/custom/2018/04/24/netflix-logo.png" alt="Netflix" />
            </a>
          </div>
          <div className="header--user">
            <a href="/">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user"></img>
            </a>
          </div>
      </header>
  )
}

export default Header;