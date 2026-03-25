import "../styles/navbar.css";
import { FiAward, FiBookOpen } from "react-icons/fi";
import ushalogo from "../assets/ushalogo.png";
import ushaname from "../assets/ushaname.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img className="logo" src={ushalogo} alt="logo"/>
          <img className="name" src={ushaname} alt="logoname"/>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#courses" className="nav-link">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a href="#classes" className="nav-link">
                Classes
              </a>
            </li>

            <li className="nav-item">
              <a href="#admission" className="nav-link">
                Admission
              </a>
            </li>

            <li className="nav-item">
              <a href="https://wa.me/919421516346" className="nav-link nav-cta">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
