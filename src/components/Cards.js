import React from "react"
import "./Cards.css"
import {Button} from "./Button"

function Cards({children, title}) {
  return (
    <div className="cards">
      <div className="topper">
        <h1>{title}</h1>
        <ul className="right">
          <li>
            <Button
              to="/courses"
              buttonStyle="btn--outline"
              buttonSize="btn-large"
            >
              Kelas
            </Button>
          </li>
          <li>
            <Button
              id="daftar"
              buttonStyle="btn--primary"
              buttonSize="btn-large"
            >
              Daftar
            </Button>
          </li>
        </ul>
      </div>

      <div className="cards__container">
        <div className="cards_wrapper">{children}</div>
      </div>
    </div>
  )
}

export default Cards
