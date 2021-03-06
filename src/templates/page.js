import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components'
class Page extends Component {
    render() {
        const StaticPage = this.props.data.wordpressPage

        return (
            <Layout>
                <h1>{StaticPage.title}</h1>
                <div>{StaticPage.content}</div>
            </Layout>
        )
    }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`