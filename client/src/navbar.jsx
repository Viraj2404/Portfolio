import { Link } from 'react-router-dom';

function Navbar({onContactClick}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0 p-0 px-4">
      <div className="container-fluid">
        <a className="navbar-brand  logo-body" href="/user" style={{ fontSize: '3 rem' }}>Viraj Shinde</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/user">Home</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link active" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <a onClick={onContactClick} className="nav-link active" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
