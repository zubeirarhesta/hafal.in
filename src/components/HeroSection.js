import {Button} from "./Button"
import React from "react"
import "./HeroSection.css"
import "../App.css"

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <div className="overlay"> */}
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>LOREM</h1>
      <p>lorem</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LOREM
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          PLAY <i className="far fa-play-circle" />
        </Button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default HeroSection
