import React, { Component } from 'react'

import NavBar from './NavBar'
import Space from './Space'
// import Sky from './Sky'
// import Mountains from './Mountains'
// import Forest from './Forest'
// import Ocean from './Ocean'

export default class Layout extends Component {
  render () {
    return (
      <div className="outerContainer">
        <NavBar />
        <h1 className="appTitle">Flashy Sassy</h1>

        <Space />
        {/* <Sky />
        <Mountains />
        <Forest />
        <Ocean /> */}
        <span className="fsSun"><img src="./images/sun.png" alt="international space station" /></span>
      </div>
    )
  }
}
