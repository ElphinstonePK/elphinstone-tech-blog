import { graphql } from "gatsby"
import React from "react"

const WpPost = ({
    data: {
        wpPost: {
            title,
            content,
        },
    },
}: any) => {
    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>)
}

//use fragments to destrucute components into pieces

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPost