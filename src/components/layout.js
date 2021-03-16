import { Global, css } from "@emotion/react"

import React from "react"
import { styled } from "@emotion/styled"

const Wrapper = styled("div")`
  font-size: 1rem;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          div {
            background: white;
            color: pink;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}
