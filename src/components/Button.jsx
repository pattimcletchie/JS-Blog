import "@fontsource/puritan"

import React from "react"
import Theme from "../../templates/theme"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"

const Button = styled.button`
  font-family: "Puritan";
  font-size: 24px;
  color: ${Theme};
`

export default function Button() {
  return <Button></Button>
}
