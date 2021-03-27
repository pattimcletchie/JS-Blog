import "@fontsource/puritan"

import { Global, css } from "@emotion/react"

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
        }
      }}
    />
      {children}
    </Wrapper>

  )
}