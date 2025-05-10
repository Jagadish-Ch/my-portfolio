import React from 'react'

const Header = () => {
  return (
    // header
    <header>
      <a href="/" className="logo">My<span>Portfolio</span></a>

      <nav>
        <a href="/">Home</a>
        <a href="/service" target='_self'>Service</a>
        <a href="#">Resume</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header
