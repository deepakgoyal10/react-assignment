import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';

function Navbar() {




  return (
    <div className='my-navbar'>
     <div className="icon">
     <Link to='/' style={{ textDecoration: "none", color: "inherit"}}> <span >Movies365</span></Link>
     </div>
      <div className="item">
      <Link to='/' style={{ textDecoration: "none", color: "inherit"}}> <li>Movies</li></Link>
        <li>TV Shows</li>
        <li>About</li>
      </div>
      <div className="search">
          <input type="text" placeholder='Search...' />
          <button>Search</button>
        </div>
    </div>
  )
}

export default Navbar