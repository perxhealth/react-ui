import * as React from "react"
import { screen, render } from "@testing-library/react"

import { FullscreenLoading } from "./FullscreenLoading"

describe("FullscreenLoading", () => {
  beforeEach(() => {
    render(<FullscreenLoading message="Retrieving account information" />)
  })

  it("shows the expected message text", () => {
    expect(
      screen.getByText("Retrieving account information")
    ).toBeInTheDocument()
  })
})
