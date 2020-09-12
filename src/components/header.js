import React, {useState} from "react"
import {Link} from "gatsby"
import Container from "./container"

const Header = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger")
    hamburger.classList.contains("is-active")
      ? setActive(false)
      : setActive(true)
  }

  return(
  <header>
    <Container additionalClass="flex justify-between align-center">
      <div className="logo">
        <Link to="/">luxestate</Link>
      </div>

      <nav>
        <ul className={`main ${active ? "is-active" : ""}`}>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Appartments</Link></li>
          <li><Link to="/">How It Work</Link></li>
          <li><Link to="/">Agents</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>

      <ul className="cta">
        <li><Link to="/">Join Us</Link></li>
        <li><Link to="/" className="bold">Getting Started</Link></li>
      </ul>

      <button
        className={`hamburger hamburger--collapse ${
          active ? "is-active" : ""
        }`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </Container>
  </header>
)
}

export default Header
