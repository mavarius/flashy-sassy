import React from 'react'

let openClass = ''

const toggleNavBar = () => {
  if (!openClass) openClass = 'open'
  else openClass = ''
  console.log('openClassInside: ', openClass)
  renderNavBar(openClass)
}

const renderNavBar = (elClass) => {
  console.log('elClass: ', elClass)
  return (
    <nav className={`navBar ${elClass}`}>
      <ul className="navItems">
        <li>space</li>
        <li>sky</li>
        <li>mountains</li>
        <li>forest</li>
        <li>ocean</li>
      </ul>
      <div id="navBtn" className={elClass} onClick={toggleNavBar}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

const NavBar = () => (
  renderNavBar(openClass)
)

export default NavBar
