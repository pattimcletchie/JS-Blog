import "@fontsource/puritan"

import { Global, ThemeProvider, css } from "@emotion/react"

import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  font-family: "Puritan", sans-serif;
`
export default function Theme({ children }) {
  return (

    <Wrapper>
      <Global
        styles={css`  
          div {
            color: white;
          }
        `}
        />
       <Global
      styles={{
        '.nudeBackground': {
          backgroundColor: '#d5bdb3'
        },
        '.forestBackground': {
            backgroundColor: '#004643'
        },
        '.strawberry': {
            backgroundColor: '#ff4e50'
        },
        '.mutedStrawberry': {
            backgroundColor: '#e16162'
        },
        '.nude50': {
            backgroundColor: '#d4b49b'
        },
        '.nude25': {
            backgroundColor: '#f3f9f1'
        },
        '.blackForect': {
            color: '#001e1d'
        }
      }}
    />
      {children}
    </Wrapper>

  )
}