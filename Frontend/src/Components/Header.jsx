import React from 'react'

const Header = () => {
  return (
    // header
    <header>
      <a href="/" className="logo">My<span>Portfolio</span></a>

      <nav>
        <a href="/">Home</a>
        <a href="#" target='_self'>Services</a>
        <a href="#">Resume</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header
