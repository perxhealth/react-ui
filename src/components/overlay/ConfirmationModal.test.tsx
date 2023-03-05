import * as React from "react"
import { vi } from "vitest"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ConfirmationModal, ConfirmationModalProps } from "./ConfirmationModal"

describe("ConfirmationModal", () => {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()

  // render a Notice component with sane, overridable defaults
  const setup = (props?: Partial<ConfirmationModalProps>) => {
    const defaultProps: ConfirmationModalProps = {
      isOpen: true,
      onConfirm: onConfirm,
      onCancel: onCancel,
      children: <p>ConfirmationModal body content</p>,
    }

    return {
      user: userEvent.setup(),
      ...render(<ConfirmationModal {...defaultProps} {...props} />),
    }
  }

  describe("props", () => {
    describe("onConfirm", () => {
      it("is called when the Confirm button is clicked", async () => {
        const { getByText } = setup()
        await userEvent.click(getByText("Confirm"))
        expect(onConfirm).toHaveBeenCalledTimes(1)
      })
    })

    describe("onCancel", () => {
      it("is called when the Cancel button is clicked", async () => {
        const { getByText } = setup()
        await userEvent.click(getByText("Cancel"))
        expect(onCancel).toHaveBeenCalledTimes(1)
      })
    })

    describe("initialFocusRef", () => {
      it("sets focuses on the provided ref", async () => {
        const ref = React.createRef<HTMLButtonElement>()
        const { getByText } = setup({
          initialFocusRef: ref,
          children: (
            <form>
              <button>First Button</button>
              <button ref={ref}>Second Button</button>
            </form>
          ),
        })

        await waitFor(() => {
          expect(getByText("Second Button")).toHaveFocus()
        })
      })
    })

    describe("isOpen", () => {
      describe("is true", () => {
        it("renders the component", async () => {
          const { getByText } = setup({ isOpen: true })
          expect(getByText("Are you sure?")).toBeInTheDocument()
        })
      })

      describe("is false", () => {
        it("does not render anything", async () => {
          const { queryByText } = setup({ isOpen: false })
          expect(queryByText("Are you sure?")).toBeNull()
        })
      })
    })

    describe("headerText", () => {
      describe("default", () => {
        it("is sane", () => {
          const { getByText } = setup()
          expect(getByText("Are you sure?")).toBeInTheDocument()
        })
      })

      describe("customised", () => {
        it("is displayed in the modal", () => {
          const { getByText } = setup({ headerText: "Think again!" })
          expect(getByText("Think again!")).toBeInTheDocument()
        })

        it("overrides the default", () => {
          const { queryByText } = setup({ headerText: "Think again!" })
          expect(queryByText("Are you sure?")).not.toBeInTheDocument()
        })
      })
    })

    describe("isLoading", () => {
      describe("is true", () => {
        it("disables the Cancel button", () => {
          const { getByText } = setup({ isLoading: true })
          expect(getByText("Cancel")).toBeDisabled()
        })

        it("manifests the 'Confirm' button as loading", () => {
          const { getByText } = setup({ isLoading: true })
          expect(getByText("Confirm")).not.toBeVisible()
          expect(getByText("Confirm").closest("button")).toBeDisabled()
        })
      })
    })

    describe("children", () => {
      it("renders children in the modal's body", () => {
        const { getByText } = setup({ children: <p>Super modal!</p> })
        expect(getByText("Super modal!")).toBeInTheDocument()
      })
    })
  })
})
