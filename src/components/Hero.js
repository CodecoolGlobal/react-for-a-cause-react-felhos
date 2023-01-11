import React from 'react'
import tiger from "./../tiger.svg"
import donateButton from "./../donateButton.svg"
import "./css/Hero.css"

export default function Hero() {
  return (
    <>
      <div className="hero">
          <img id="tiger" src={tiger}></img>
          <div className="btn-wrapper" >
              <div>
                  <img id="btn-donate" src={donateButton} onClick={_ => window.location.href="#donate"}></img>
              </div>
          </div>
      </div>
      <div className="separator">
      </div>
    </>
  )
}
