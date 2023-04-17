import * as React from "react"
import { vi } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Pagination, PaginationProps } from "./Pagination"

describe("Pagination", () => {
  const onPreviousClick = vi.fn()
  const onNextClick = vi.fn()
  const onPageNumberClick = vi.fn()

  // render a Pagination component with sane, overridable defaults
  const setup = (props?: Partial<PaginationProps>) => {
    const defaultProps: PaginationProps = {
      currentPage: 5,
      totalPages: 42,
      onPreviousClick,
      onNextClick,
      onPageNumberClick,
    }

    return {
      user: userEvent.setup(),
      ...render(<Pagination {...defaultProps} {...props} />),
    }
  }

  describe("page count", () => {
    it("renders the first button", async () => {
      const { getByText } = setup()
      await userEvent.click(getByText("1"))
      expect(onPageNumberClick).toHaveBeenCalledWith(1)
    })

    it("renders the last button", async () => {
      const { getByText } = setup()
      await userEvent.click(getByText("42"))
      expect(onPageNumberClick).toHaveBeenCalledWith(42)
    })

    it("renders the expected amount of buttons", async () => {
      const { queryAllByRole } = setup()
      // 42 page, buttons plus previous and next buttons
      expect(queryAllByRole("button").length).toBe(44)
    })
  })

  describe("when on the first page", () => {
    it("renders the correct amount of numbered buttons", async () => {
      const { getByText } = setup({ currentPage: 1, totalPages: 3 })
      await userEvent.click(getByText("2"))
      expect(onPageNumberClick).toHaveBeenCalledWith(2)
      await userEvent.click(getByText("3"))
      expect(onPageNumberClick).toHaveBeenCalledWith(3)
      expect(onPageNumberClick).toHaveBeenCalledTimes(2)
    })

    it("clicking the next button triggers onNextClick", async () => {
      const { getByLabelText } = setup({ currentPage: 1, totalPages: 3 })
      await userEvent.click(getByLabelText("Next Page"))
      expect(onNextClick).toHaveBeenCalledTimes(1)
    })

    it("clicking a numbered button triggers onPageNumberClick with correct number", async () => {
      const { getByText } = setup({ currentPage: 1, totalPages: 3 })
      await userEvent.click(getByText("3"))
      expect(onPageNumberClick).toHaveBeenCalledWith(3)
    })

    it("previous button is disabled on first page", async () => {
      const { getByLabelText } = setup({ currentPage: 1, totalPages: 3 })
      await expect(getByLabelText("Previous Page")).toBeDisabled()
    })
  })

  describe("when on the last page", () => {
    it("current pages numbered button is disabled", () => {
      const { getByText } = setup({ currentPage: 3, totalPages: 3 })
      expect(getByText("3")).toBeDisabled()
    })

    it("next button is disabled on last page", () => {
      const { getByLabelText } = setup({ currentPage: 3, totalPages: 3 })
      expect(getByLabelText("Next Page")).toBeDisabled()
    })

    it("clicking the previous button triggers onPreviousClick", async () => {
      const { getByLabelText } = setup({ currentPage: 3, totalPages: 3 })
      await userEvent.click(getByLabelText("Previous Page"))
      expect(onPreviousClick).toHaveBeenCalledTimes(1)
    })
  })
})
