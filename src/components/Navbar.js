import React from 'react';
import PropTypes from 'prop-types';

/**
 * A functional component that renders a navigation bar.
 *
 * @param {object} props - The component's props.
 * @param {string} props.title - The title of the navigation bar.
 * @param {string} props.aboutText - The text for the "About" link.
 * @returns {JSX.Element} The navigation bar component.
 */
export default function Navbar({ title, aboutText }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="/">{title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-semibold" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/about">
                {aboutText}
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 border border-primary shadow-sm"
              type="search"
              placeholder="Search text..."
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  /**
   * The title of the navigation bar.
   */
  title: PropTypes.string.isRequired,
  /**
   * The text for the "About" link.
   */
  aboutText: PropTypes.string.isRequired,
};

/**
 * Optional fallback props.
 */
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About',
};