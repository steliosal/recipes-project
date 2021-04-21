import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
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
      </main>
    </Layout>
  )
}

export default Contact
