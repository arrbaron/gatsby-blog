import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar';

console.log(Sidebar);
const IndexPage = ({ data }) => (
  
  <div>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <article className="post">
          <h2>
            <Link key={post.node.id} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </h2>
          <div dangerouslySetInnerHTML={{__html: post.node.html}}></div>
        </article>
      ))}
    </ul>
    <aside>
      <Sidebar />
    </aside>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage