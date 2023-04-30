import React from 'react'
import { Link } from 'react-router-dom'
import CheckOut from '../CheckoutBtn'
import './header.css'
const Header = () => {
  return (
<header className="header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to='/' className="navbar-brand text-light h2" >Bakery Ultra Max Pro</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to='/about'>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to='/products' className="nav-link text-light" >Products</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link text-light" >Contact</Link>
          </li>
          <li className="nav-item">
            <CheckOut />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Header