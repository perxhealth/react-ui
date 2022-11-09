import * as React from "react"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"

import { Notice } from "../Notice"

describe("Notice", () => {
  const onClose = jest.fn()

  beforeEach(() => {
    render(
      <Notice onClose={onClose} title="Primary text" description="subtext" />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the primary text", () => {
    expect(screen.getByText("Primary text")).toBeInTheDocument()
  })

  it("renders the subtext", () => {
    expect(screen.getByText("subtext")).toBeInTheDocument()
  })

  it("calls props.onCloseClick when the close button is clicked", () => {
    user.click(screen.getByRole("button"))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
