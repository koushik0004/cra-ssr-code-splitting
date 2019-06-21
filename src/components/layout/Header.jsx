import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header>
    <div className="navbar navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24"
            focusable="false">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg> */}
          <h3>Poc Shop</h3>
        </a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0 text-muted sr-only" type="submit">
            Search
          </button>
          <FontAwesomeIcon icon={faShoppingCart} />
          (11)
        </form>
      </div>
    </div>
  </header>
);

export default Header;