import { useCallback, useRef } from "react";
import "../styles/navbar.css";
import Collapse from "bootstrap/js/dist/collapse";
import ushabglogo from "../assets/ushabglogo.png";
//import ushaname from "../assets/ushaname.png";

function Navbar() {
  const navMenuRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    if (window.innerWidth >= 992 || !navMenuRef.current) return;
    if (!navMenuRef.current.classList.contains("show")) return;

    const collapse = Collapse.getOrCreateInstance(navMenuRef.current);
    collapse.hide();
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#classes", label: "Classes" },
    { href: "#admission", label: "Admission" },
    { href: "https://wa.me/919421516346", label: "Contact", cta: true },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img className="logo" src={ushabglogo} alt="logo" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu" ref={navMenuRef}>
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link ${link.cta ? "nav-cta" : ""}`.trim()}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
