import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import '../../styles/menubar.scss'

const Menubar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="container">
      <div className="nav-bar">
        <Link
          className="logo normal-text"
          to="/"
          onClick={() => setShowNav(false)}
        >
          logo
        </Link>
        {showNav ? (
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="2x"
            className="close-icon"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="2x"
            className="hamburger-icon"
          />
        )}
        <nav className={showNav ? 'nav-show' : ''}>
          <NavLink exact="true" to="/about" onClick={() => setShowNav(false)}>
            About
          </NavLink>
          <NavLink
            exact="true"
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            Projects
          </NavLink>
          <NavLink exact="true" to="/skills" onClick={() => setShowNav(false)}>
            Skills
          </NavLink>
          <NavLink exact="true" to="/contact" onClick={() => setShowNav(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  )
};

export default Menubar;
