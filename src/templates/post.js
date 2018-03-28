import React from 'react';
import Helmet from 'react-helmet';
import './style.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="post">
      <h2 className="post__title">{post.frontmatter.title}</h2>
      <div className="post__content" dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`