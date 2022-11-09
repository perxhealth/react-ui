import * as React from "react"
import { screen, render, RenderResult } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { FormDrawer } from "../FormDrawer"

describe("FormDrawer", () => {
  let view: RenderResult

  const onClose = jest.fn()

  beforeEach(() => {
    view = render(
      <FormDrawer
        title="Schedule a dose"
        formId="the-form-id"
        onClose={onClose}
        isOpen={true}
        isSubmitting={false}
        children={<p>Hello!</p>}
      />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the header", () => {
    expect(screen.getByRole("banner").textContent).toBe("Schedule a dose")
  })

  it("renders the body", () => {
    expect(screen.getByText("Hello!")).toBeInTheDocument()
  })

  it("attaches the submit button to the form", () => {
    const submitButton = screen.getByRole("button", { name: "Submit" })
    expect(submitButton).toHaveAttribute("type", "submit")
    expect(submitButton).toHaveAttribute("form", "the-form-id")
  })

  it("closes when the Cancel button is clicked", async () => {
    await userEvent.click(screen.getByText("Cancel"))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  describe("submitting state", () => {
    beforeEach(() => {
      view.rerender(
        <FormDrawer
          title="Schedule a dose"
          formId="the-form-id"
          onClose={onClose}
          isOpen={true}
          isSubmitting={true}
          children={<p>Hello!</p>}
        />
      )
    })

    it("disables the cancel button", () => {
      expect(screen.getByText("Cancel")).toBeDisabled()
    })

    it("disables the submit button", () => {
      // 'Submit' text is actually in an off screen label given `isLoading`
      // is also true. Because of this, we need to seek the underlying `button`
      expect(screen.getByText("Submit").closest("button")).toBeDisabled()
    })
  })
})
