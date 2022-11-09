import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ToastNotification } from "../ToastNotification"

describe("ToastNotification", () => {
  const onCustomButtonClick = jest.fn()
  const onClose = jest.fn()

  describe("primary content", () => {
    beforeEach(() =>
      render(<ToastNotification title="The title!" subtitle="the subtitle!" />)
    )

    it("renders the correct title", () => {
      expect(screen.getByText("The title!")).toBeInTheDocument()
    })

    it("renders the correct subtitle", () => {
      expect(screen.getByText("the subtitle!")).toBeInTheDocument()
    })
  })

  describe("custom button", () => {
    beforeEach(() => {
      render(
        <ToastNotification
          title="Some title"
          customButtonText="Do a thing!"
          onCustomButtonClick={onCustomButtonClick}
        />
      )
    })

    it("renders a button if customButtonText is supplied", () => {
      expect(
        screen.getByRole("button", { name: "Do a thing!" })
      ).toBeInTheDocument()
    })

    it("triggers onCustomButtonClick when the custom button is clicked", async () => {
      await userEvent.click(screen.getByText("Do a thing!"))
      expect(onCustomButtonClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("close button", () => {
    beforeEach(() => {
      render(
        <ToastNotification
          title="Some title"
          showCloseButton={true}
          onClose={onClose}
        />
      )
    })

    it("is shown when showCloseButton is true", () => {
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
    })

    it("triggers onClose when clicked", async () => {
      await userEvent.click(screen.getByText("Close"))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
