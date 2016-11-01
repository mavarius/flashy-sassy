import React from 'react'

let openClass = 'closed'

const toggleNavBar = () => {
  let navBar = document.getElementById('navBar')
  if (navBar.className === 'open') navBar.className = 'closed'
  else navBar.className = 'open'

  let navBtn = document.getElementById('navBtn')
  if (navBtn.className === 'open') navBtn.className = 'closed'
  else navBtn.className = 'open'
}

const renderNavBar = (elClass) => {
  return (
    <nav id="navBar" className={elClass}>
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
