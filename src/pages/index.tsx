import * as React from "react"
import { graphql, HeadFC, Link } from "gatsby"
import { Node, Query, WpEdge, WpPost, WpPostConnection, WpPostEdge } from "../types/generated"

const IndexPage = ( data : Query) => {
  return (
    <main>
      <h1>Welcome to Elphinstone Tech Blog</h1>
      {
        data.allWpPost.edges.map((post: WpPostEdge) => {
          return(
            <li>
            <Link to={post.node.uri!}>{post.node.title}</Link>
            </li>
          )
        })
      }
      <div>
        <p>Navigate back to <Link to="https://elphinstone.com.pk">main site</Link></p>
      </div>
    </main>
  )
}

export const query = graphql`
query GetAllPostsTitles {
  allWpPost {
    edges {
      node {
        uri
        id
        title
      }
    }
  }
}`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
