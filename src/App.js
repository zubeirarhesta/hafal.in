import React from "react"
import {TitleContext} from "./Contexts"
import "./App.css"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home.js"
import Courses from "./components/pages/Courses.js"
import About from "./components/pages/About.js"
import SignUp from "./components/pages/SignUp.js"
import "@fontsource/public-sans"

function App() {
  const title = "Hafal.in"

  return (
    <>
      <TitleContext.Provider value={title}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/courses" exact element={<Courses />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/sign-up" exact element={<SignUp />} />
          </Routes>
        </Router>
      </TitleContext.Provider>
    </>
  )
}

export default App
