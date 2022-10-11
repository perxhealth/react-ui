import * as React from "react"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"

import { Text } from "@chakra-ui/react"
import { ConfirmationModal } from "../ConfirmationModal"

describe("ConfirmationModal", () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()

  describe("when all information is provided", () => {
    beforeEach(() => {
      render(
        <ConfirmationModal
          onConfirm={onConfirm}
          onCancel={onCancel}
          isOpen={true}
          headerText="Please Confirm">
          <Text>Are you sure you want to confirm?</Text>
        </ConfirmationModal>
      )
    })

    it("displays correct header text", () => {
      expect(screen.getByText("Please Confirm")).toBeInTheDocument()
    })

    it("displays correct body text", () => {
      expect(
        screen.getByText("Are you sure you want to confirm?")
      ).toBeInTheDocument()
    })

    it("clicking the confirm button triggers onConfirm", () => {
      user.click(screen.getByText("Confirm"))
      expect(onConfirm).toHaveBeenCalledTimes(1)
    })

    it("clicking the cancel button triggers onCancel", () => {
      user.click(screen.getByText("Cancel"))
      expect(onCancel).toHaveBeenCalledTimes(1)
    })
  })

  describe("when no header text is provided", () => {
    beforeEach(() => {
      render(
        <ConfirmationModal
          onConfirm={onConfirm}
          onCancel={onCancel}
          isOpen={true}>
          <Text>Please make your selection.</Text>
        </ConfirmationModal>
      )
    })

    it("renders alternative text", () => {
      expect(screen.getByText("Are you sure?")).toBeInTheDocument()
    })
  })
})
