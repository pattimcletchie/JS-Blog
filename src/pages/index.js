import "@fontsource/puritan"

import {Col, Container, Row} from "react-grid-system";
import { Link, graphql } from "gatsby"

import React from "react"
import Theme from "../templates/theme"
import styled from "@emotion/styled"

const Paragraph = styled.p`
  color:  black;
`


export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (

        <Theme>
          <Container className='forestBackground' fluid>
            <Row>
              <Col>
          <h1>{title}</h1>
          <Paragraph>{description}</Paragraph>
          <Link to="/blog">Read my blog</Link>
          </Col>
          <Col></Col>
          </Row>
          </Container>
          <Container className='nudeBackground' fluid>
            <Row>
              <Col></Col>
              <Col>
                <button>
                  React Projects
                </button>
              </Col>
            </Row>
          </Container>
        </Theme>

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
