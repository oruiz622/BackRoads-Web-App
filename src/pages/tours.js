import React, { Component } from "react"
import Layout from "../components/Layout"
import { FaSitemap } from "react-icons/fa"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

// GraphQl example queries must add component below
// import Header from "../examples/RegularHeader"
// import Button from "../examples/Button"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
