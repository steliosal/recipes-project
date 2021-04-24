import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <h3>
        {data.site.siteMetadata.person.name}:{data.site.siteMetadata.person.age}
      </h3>
      <div>
        <h3>
          {data.site.siteMetadata.complexData.map((item, index) => {
            return (
              <p key={index}>
                {item.name}:{item.age}
              </p>
            )
          })}
        </h3>
      </div>
    </div>
  )
}

export default FetchData
