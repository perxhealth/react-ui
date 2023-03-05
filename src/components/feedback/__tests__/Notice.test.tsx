import * as React from "react"
import { vi, describe, beforeEach, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Notice } from "../Notice"

describe("Notice", () => {
  const onClose = vi.fn()

  beforeEach(() => {
    render(
      <Notice onClose={onClose} title="Primary text" description="subtext" />
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders the primary text", () => {
    expect(screen.getByText("Primary text")).toBeInTheDocument()
  })

  it("renders the subtext", () => {
    expect(screen.getByText("subtext")).toBeInTheDocument()
  })

  it("calls props.onCloseClick when the close button is clicked", async () => {
    await userEvent.click(screen.getByRole("button"))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
