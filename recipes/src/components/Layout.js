import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
