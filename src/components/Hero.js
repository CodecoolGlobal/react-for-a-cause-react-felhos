import React from 'react'
import tiger from "./../tiger.svg"
import donateButton from "./../donateButton.svg"
import "./css/Hero.css"

export default function Hero() {
  return (
    <div class="hero">
        <img id="tiger" src={tiger}></img>
        <div class="btn-wrapper">
            <div>
                <img id="btn-donate" src={donateButton}></img>
            </div>
        </div>
    </div>
  )
}
