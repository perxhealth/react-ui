import * as React from "react"
import { screen, render } from "@testing-library/react"

import { FullscreenLoading } from "../FullscreenLoading"

describe("FullscreenLoading", () => {
  describe("when all information is provided", () => {
    beforeEach(() => {
      render(
        <FullscreenLoading message="Retrieving account information" />
      )
    })

    it("displays correct header text", () => {
      expect(screen.getByText("Retrieving account information")).toBeInTheDocument()
    })
  })
})
