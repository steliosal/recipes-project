import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import { graphql } from "gatsby"


const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>get in touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolor consectetur nam, voluptatibus, commodi accusantium dolorem
              enim eligendi ipsum impedit recusandae blanditiis laborum
              mollitia? Exercitationem ut sequi neque rem assumenda?
            </p>
            <p>
              Slow-carb VHS listicle pug, +1 salvia skateboard godard bushwick
              polaroid.
            </p>
            <p>
              8-bit kitsch mixtape echo park. Vegan retro salvia put a bird on
              it. Church-key lo-fi fashion axe distillery neutra.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className = 'featured-recipes'>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}


export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default Contact
