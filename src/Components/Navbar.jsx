/* eslint-disable react/prop-types */

// Navbar component with navigation links for different categories
const Navbar = ({ setCategory }) => {
  return (
    <div>
      {/* Bootstrap navbar with dark theme */}
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Brand logo with a light badge */}
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-secondary fs-4">
              FreshNews
            </span>
          </a>

          {/* Toggler button for responsive design */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ cursor: "pointer" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ cursor: "pointer" }}>
              {/* Navigation link for Technology category */}
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>

              {/* Navigation link for Business category */}
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>

              {/* Navigation link for Health category */}
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>

              {/* Navigation link for Science category */}
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>

              {/* Navigation link for Sports category */}
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("sports")}>
                  Sports
                </div>
              </li>

              {/* Navigation link for Entertainment category */}
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
