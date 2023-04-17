import * as React from "react"
import { vi } from "vitest"

import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ToastNotification, ToastNotificationProps } from "./ToastNotification"

describe("ToastNotification", () => {
  const onCustomButtonClick = vi.fn()
  const onClose = vi.fn()

  // render a ToastNotification component with sane, overridable defaults
  const setup = (props?: Partial<ToastNotificationProps>) => {
    const defaultProps: ToastNotificationProps = {
      title: "Look at me!",
      onClose: onClose,
    }

    return {
      user: userEvent.setup(),
      ...render(<ToastNotification {...defaultProps} {...props} />),
    }
  }

  describe("primary content", () => {
    it("renders the correct title", () => {
      const { getByText } = setup({ title: "The title!" })
      expect(getByText("The title!")).toBeInTheDocument()
    })

    it("renders the correct subtitle", () => {
      const { getByText } = setup({ subtitle: "the subtitle!" })
      expect(getByText("the subtitle!")).toBeInTheDocument()
    })
  })

  describe("custom button", () => {
    it("renders a button if customButtonText is supplied", () => {
      const { getByRole } = setup({ customButtonText: "Do a thing!" })
      expect(getByRole("button", { name: "Do a thing!" })).toBeInTheDocument()
    })

    it("triggers onCustomButtonClick when the custom button is clicked", async () => {
      const { getByText } = setup({
        customButtonText: "Do a thing!",
        onCustomButtonClick: onCustomButtonClick,
      })
      await userEvent.click(getByText("Do a thing!"))
      expect(onCustomButtonClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("close button", () => {
    it("is shown when showCloseButton is true", () => {
      const { getByRole } = setup({ showCloseButton: true })
      expect(getByRole("button", { name: "Close" })).toBeInTheDocument()
    })

    it("triggers onClose when clicked", async () => {
      const { getByText } = setup({ showCloseButton: true })
      await userEvent.click(getByText("Close"))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
