import * as React from "react"
import { vi, describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Notice, NoticeProps } from "./Notice"

describe("Notice", () => {
  const onClose = vi.fn()

  // render a Notice component with sane, overridable defaults
  const setup = (props?: Partial<NoticeProps>) => {
    const defaultProps: NoticeProps = { title: "Primary text" }

    return {
      user: userEvent.setup(),
      ...render(<Notice {...defaultProps} {...props} />),
    }
  }

  it("renders the primary text", () => {
    const { getByText } = setup()
    expect(getByText("Primary text")).toBeInTheDocument()
  })

  it("renders the subtext", () => {
    const { getByText } = setup({ description: "subtext" })
    expect(getByText("subtext")).toBeInTheDocument()
  })

  it("calls props.onCloseClick when close is clicked", async () => {
    const { getByRole } = setup({ onClose: onClose })
    await userEvent.click(getByRole("button"))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
