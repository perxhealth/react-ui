import * as React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { FullscreenLoading, FullscreenLoadingProps } from "./FullscreenLoading"

describe("FullscreenLoading", () => {
  // render a FullscreenLoading component with sane, overridable defaults
  const setup = (props?: Partial<FullscreenLoadingProps>) => {
    return {
      user: userEvent.setup(),
      ...render(<FullscreenLoading {...props} />),
    }
  }

  it("shows the expected message text", () => {
    const { getByText } = setup({ message: "Retrieving account..." })
    expect(getByText("Retrieving account...")).toBeInTheDocument()
  })
})
