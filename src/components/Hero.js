import React from 'react'
import tiger from "./../tiger.svg"
import donateButton from "./../donateButton.svg"
import "./css/Hero.css"

export default function Hero() {
  return (
    <>
      <div class="hero">
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
