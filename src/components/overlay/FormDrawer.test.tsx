import * as React from "react"
import { vi } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { FormDrawer, FormDrawerProps } from "./FormDrawer"

describe("FormDrawer", () => {
  const onClose = vi.fn()

  // render a FormDrawer component with sane, overridable defaults
  const setup = (props?: Partial<FormDrawerProps>) => {
    const defaultProps: FormDrawerProps = {
      title: "Schedule a dose",
      formId: "the-form-id",
      isOpen: true,
      isSubmitting: false,
      onClose: onClose,
      children: <p>Hello!</p>,
    }

    return {
      user: userEvent.setup(),
      ...render(<FormDrawer {...defaultProps} {...props} />),
    }
  }

  it("renders the header", () => {
    const { getByRole } = setup()
    expect(getByRole("banner").textContent).toBe("Schedule a dose")
  })

  it("renders the body", () => {
    const { getByText } = setup()
    expect(getByText("Hello!")).toBeInTheDocument()
  })

  it("attaches the submit button to the form", () => {
    const { getByRole } = setup()
    const submitButton = getByRole("button", { name: "Submit" })
    expect(submitButton).toHaveAttribute("type", "submit")
    expect(submitButton).toHaveAttribute("form", "the-form-id")
  })

  it("closes when the Cancel button is clicked", async () => {
    const { getByText } = setup()
    await userEvent.click(getByText("Cancel"))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  describe("submitting state", () => {
    it("disables the cancel button", () => {
      const { getByText } = setup({ isSubmitting: true })
      expect(getByText("Cancel")).toBeDisabled()
    })

    it("disables the submit button", () => {
      // 'Submit' text is actually in an off screen label given `isLoading`
      // is also true. Because of this, we need to seek the underlying `button`
      const { getByText } = setup({ isSubmitting: true })
      expect(getByText("Submit").closest("button")).toBeDisabled()
    })
  })
})
