import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container">
        <NavLink className="navbar-brand" to="/">LMS</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Teachers
            </Link>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
              </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header