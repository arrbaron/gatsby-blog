import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const length = 250;
  return (
    <div>
      <ul>
        {data.allMarkdownRemark.edges.map((post, index) => (
          <article key={index} className="post">
            <h2 className="post__title">
              <Link key={post.node.id} to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h2>
            {/* display only the content for the first 10 posts */}
            {index < 10 ? <div className="post__content" dangerouslySetInnerHTML={{ __html: post.node.html.substring(0, length) + '...' }}  /> : ''}
            <Link to={post.node.frontmatter.path} className="post__read-more"><p>Read more</p></Link>
          </article>
        ))}
      </ul>
    </div>
  )
}

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