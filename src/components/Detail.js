import React from "react"
import {useContext} from "react"
import {TitleContext} from "../Contexts"
import {Link} from "react-router-dom"
import {Button} from "./Button"
import "./Detail.css"

function Detail() {
  const title = useContext(TitleContext)
  return (
    <div className="detail">
      <div className="one">
        <h3>
          New to {""}
          <Link className="b" to="/">
            {title}
          </Link>{" "}
          ?
        </h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          Become a member today
        </Button>
        {/* <Link className="a" to="/sign-up"></Link> */}
      </div>
      <div className="two">
        <Link className="item__link" to="/courses">
          <figure className="item__pic-wrap" data-category="">
            <img
              className="item__img"
              alt="lorem"
              src="images/IMG_20200804_132100-02.jpeg"
            />
          </figure>
        </Link>
      </div>
    </div>
  )
}

export default Detail
