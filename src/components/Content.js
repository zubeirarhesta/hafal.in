import React from "react"

import "./Cards.css"
import "./Content.css"
import {useContext} from "react"
import {TitleContext} from "../Contexts"

function Content() {
  const title = useContext(TitleContext)
  return (
    <div className="content">
      <div className="left">
        <h3>Lorus Ompus Bligius</h3>
        <h6>{title} is pltform that helps you thing thing thing thing</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="right">
        <video src="/videos/video-1.mp4" controls loop />
      </div>
    </div>
  )
}

export default Content
