import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import "../styles/portal.scss"
import HelmetEx from '../components/helmet-ex'

class Blog extends Component {

  render() {
    const data = this.props.data
    
    return (
      <Layout>
        <section className='blog-section'>
          <HelmetEx>
            <div metadata="title">
              Blog
            </div>
            <div metadata="keywords">
              indoor cycling, indoor cycle, interactive bike, streaming classes, virtual classes, stryde, stryde bike, virtual workouts
            </div>
            <div metadata="path">/blog</div>
            <div metadata="description">
              Access indoor cycling classes from country's top studios on an interactive bike at your home
            </div>
          </HelmetEx>
          <div className='container'>
            <h1>Posts</h1>
            {data.allWordpressPost.edges.map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug}>
                  <div dangerouslySetInnerHTML={{ __html: node.title }} />
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <hr />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;