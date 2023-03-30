import React from "react"
import "../../App.css"
import CardItem from "../CardItem"
import Cards from "../Cards"
import Detail from "../Detail"
import Footer from "../Footer"
import "../../components/Cards.css"
import Content from "../Content"

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Detail />
      <Cards title={"Learn from our experienced teachers!"}>
        <ul className="cards__items">
          <CardItem
            src="images/img-5.jpg"
            src2="images/teacher3.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="1 - 5"
            path="/courses"
            teacher="fulan"
            price="50k"
          />
          <CardItem
            src="images/img-8.jpg"
            src2="images/teacher1.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="30"
            path="/courses"
            teacher="hanifah"
            price="30k"
          />
          <CardItem
            src="images/img-9.jpg"
            src2="images/teacher2.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="1 - 10"
            path="/courses"
            teacher="ahmad"
            price="70k"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="images/img-6.jpg"
            src2="images/teacher1.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="1 - 30"
            path="/courses"
            teacher="said"
            price="120k"
          />
          <CardItem
            src="images/img-2.jpg"
            src2="images/teacher2.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="1 - 5"
            path="/courses"
            teacher="siti"
            price="50k"
          />
          <CardItem
            src="images/img-1.jpg"
            src2="images/teacher3.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            label="1 - 5"
            path="/courses"
            teacher="fulan"
            price="50k"
          />
        </ul>
      </Cards>

      <Content />
      <Footer />
    </>
  )
}

export default Home
