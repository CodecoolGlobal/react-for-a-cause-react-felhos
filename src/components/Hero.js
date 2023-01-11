import React from 'react'
import donateButton from "./../assets/donateButton.svg"
import "./css/Hero.css"

export default function Hero() {
  return (
    <>
      <div className="hero">
          <div id="tiger"></div>
          <div class="btn-wrapper" >
              <div>
                  <img id="btn-donate" src={donateButton} onClick={_ => window.location.href="#donate"}></img>
              </div>
          </div>
      </div>
    </>
  )
}
