import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className='h'>
            <h1 className='logo'>Fukuchi Tech Blog</h1>
            <Link to='/contact' className='contact-link'>Contact</Link>
        </div>
    </header>
  )
}

export default Header;