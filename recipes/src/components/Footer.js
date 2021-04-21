import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Simply Recipes</span>. Built
        with <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
