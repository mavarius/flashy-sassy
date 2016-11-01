import React from 'react'

let renderSection = () => {
  return (
    <div className="fsSection">
      <span className="fsIss"><img src="./images/iss.png" alt="international space station" /></span>
      <span className="fsAstronaut"><img src="./images/astronaut.png" alt="international space station" /></span>
      <button className="nextSection">nextSection</button>
    </div>
  )
}

const ClientList = ({ clients }) => (
  <div>
    {renderSection()}
  </div>
)

export default ClientList
