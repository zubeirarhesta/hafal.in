import React from "react"
import {Link} from "react-router-dom"

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Pic"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          <div className="cards__item__data">
            <div className="cards__item__data__profile">
              <img
                className="cards__item__data__img"
                alt="Travel Pic"
                src={props.src2}
              />
              <p>{props.teacher}</p>
            </div>
            <p>{props.price} / hour</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
