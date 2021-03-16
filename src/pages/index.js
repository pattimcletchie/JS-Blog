import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import React from "react"
import { styled } from "@emotion/styled"

const Paragraph = styled.p`
  color: pink;
`

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <Paragraph>{description}</Paragraph>
        <Link to="/blog">Read my blog</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
