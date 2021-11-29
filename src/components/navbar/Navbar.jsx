import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar  navbar-expand-lg navbar-light top-navbar"
          data-toggle="sticky-onscroll"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Book My Show
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav pull-right">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newshows">
                    New Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
