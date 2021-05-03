import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"

const Recipes = () => {
  return (
    <Layout>
      <h1>Recipes Page</h1>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default Recipes
