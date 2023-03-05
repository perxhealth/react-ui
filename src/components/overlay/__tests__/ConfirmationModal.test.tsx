import * as React from "react"
import { vi, describe, beforeEach, it, expect } from "vitest"
import { screen, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ConfirmationModal, ConfirmationModalProps } from "../ConfirmationModal"

describe("ConfirmationModal", () => {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  // Helper to render a ConfirmationModal with sane default props and optional
  // overrides
  const renderComponent = (props?: Partial<ConfirmationModalProps>) => {
    // Set the sane defaults
    const defaultProps: ConfirmationModalProps = {
      onConfirm,
      onCancel,
      isOpen: true,
      children: <p>ConfirmationModal body content</p>,
    }

    // Merge them with `props` and render the modal
    return render(<ConfirmationModal {...defaultProps} {...props} />)
  }

  describe("props", () => {
    describe("onConfirm", () => {
      it("is called when the Confirm button is clicked", async () => {
        renderComponent()
        await userEvent.click(screen.getByText("Confirm"))
        expect(onConfirm).toHaveBeenCalledTimes(1)
      })
    })

    describe("onCancel", () => {
      it("is called when the Cancel button is clicked", async () => {
        renderComponent()
        await userEvent.click(screen.getByText("Cancel"))
        expect(onCancel).toHaveBeenCalledTimes(1)
      })
    })

    describe("initialFocusRef", () => {
      it("sets focuses on the provided ref", async () => {
        const ref = React.createRef<HTMLButtonElement>()

        renderComponent({
          initialFocusRef: ref,
          children: (
            <form>
              <button>First Button</button>
              <button ref={ref}>Second Button</button>
            </form>
          ),
        })

        await waitFor(() => {
          expect(screen.getByText("Second Button")).toHaveFocus()
        })
      })
    })

    describe("isOpen", () => {
      describe("is true", () => {
        beforeEach(() => {
          renderComponent({ isOpen: true })
        })

        it("displays content", async () => {
          await waitFor(() => {
            expect(screen.getByText("Are you sure?")).toBeVisible()
          })
        })
      })
    })

    describe("headerText", () => {
      describe("default", () => {
        it("is set to a sane value", () => {
          renderComponent()
          expect(screen.getByText("Are you sure?")).toBeInTheDocument()
        })
      })

      describe("customised", () => {
        beforeEach(() => {
          renderComponent({ headerText: "Think again!" })
        })

        it("is displayed in the modal", () => {
          expect(screen.getByText("Think again!")).toBeInTheDocument()
        })

        it("overrides the default", () => {
          expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument()
        })
      })
    })

    describe("isLoading", () => {
      describe("is true", () => {
        beforeEach(() => {
          renderComponent({ isLoading: true })
        })

        it("disables the Cancel button", () => {
          expect(screen.getByText("Cancel")).toBeDisabled()
        })

        it("manifests the 'Confirm' button as loading", () => {
          expect(screen.getByText("Confirm")).not.toBeVisible()
          expect(screen.getByText("Confirm").closest("button")).toBeDisabled()
        })
      })
    })

    describe("children", () => {
      it("renders children in the modal's body", () => {
        renderComponent({ children: <p>Super modal!</p> })
        expect(screen.getByText("Super modal!")).toBeInTheDocument()
      })
    })
  })
})
