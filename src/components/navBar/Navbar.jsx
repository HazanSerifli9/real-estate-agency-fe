import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignHanging, faRightToBracket, faHome, faPlus, faUser, faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavBar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className='Navbar'>
      <a href="/">
        <FontAwesomeIcon icon={faSignHanging} />
        Real Estate
      </a>
      <Link className="item" to="/view-properties">
        <FontAwesomeIcon icon={faHome} />
        View Properties
      </Link>
      <Link to="/add-property" className="item">
        <FontAwesomeIcon icon={faPlus} />
        Add a Property
      </Link>
      <div className="profile" onClick={toggleProfileMenu}>
        <Link to="/profile-page" className="item">
          <FontAwesomeIcon icon={faUser} />
          Profile
        </Link>

  
      
      </div>
      <Link to="/Sign-In" className="item2">
        <FontAwesomeIcon icon={faSignInAlt} />
        LogIn
      </Link>
      <Link to="/Register" className="item2">
        <FontAwesomeIcon icon={faUserPlus} />
        SignUp
      </Link>
    </div>
  )
}

export default NavBar;