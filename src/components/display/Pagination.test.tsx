import * as React from "react"
import { vi, describe, beforeEach, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Pagination } from "./Pagination"

describe("Pagination", () => {
  const onPreviousClick = vi.fn()
  const onNextClick = vi.fn()
  const onPageNumberClick = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe("page count", () => {
    beforeEach(() => {
      render(
        <Pagination
          currentPage={5}
          totalPages={42}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          onPageNumberClick={onPageNumberClick}
        />
      )
    })

    it("renders the first button", async () => {
      await userEvent.click(screen.getByText("1"))
      expect(onPageNumberClick).toHaveBeenCalledWith(1)
    })

    it("renders the last button", async () => {
      await userEvent.click(screen.getByText("42"))
      expect(onPageNumberClick).toHaveBeenCalledWith(42)
    })

    it("renders the expected amount of buttons", async () => {
      // 42 page, buttons plus previous and next buttons
      expect(screen.queryAllByRole("button").length).toBe(44)
    })
  })

  describe("when on the first page", () => {
    beforeEach(() => {
      render(
        <Pagination
          currentPage={1}
          totalPages={3}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          onPageNumberClick={onPageNumberClick}
        />
      )
    })

    it("renders the correct amount of numbered buttons", async () => {
      await userEvent.click(screen.getByText("2"))
      expect(onPageNumberClick).toHaveBeenCalledWith(2)
      await userEvent.click(screen.getByText("3"))
      expect(onPageNumberClick).toHaveBeenCalledWith(3)
      expect(onPageNumberClick).toHaveBeenCalledTimes(2)
    })

    it("clicking the next button triggers onNextClick", async () => {
      await userEvent.click(screen.getByLabelText("Next Page"))
      expect(onNextClick).toHaveBeenCalledTimes(1)
    })

    it("clicking a numbered button triggers onPageNumberClick with correct number", async () => {
      await userEvent.click(screen.getByText("3"))
      expect(onPageNumberClick).toHaveBeenCalledWith(3)
    })

    it("previous button is disabled on first page", async () => {
      await expect(screen.getByLabelText("Previous Page")).toBeDisabled()
    })
  })

  describe("when on the last page", () => {
    beforeEach(() => {
      render(
        <Pagination
          currentPage={3}
          totalPages={3}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
          onPageNumberClick={onPageNumberClick}
        />
      )
    })

    it("current pages numbered button is disabled", () => {
      expect(screen.getByText("3")).toBeDisabled()
    })

    it("next button is disabled on last page", () => {
      expect(screen.getByLabelText("Next Page")).toBeDisabled()
    })

    it("clicking the previous button triggers onPreviousClick", async () => {
      await userEvent.click(screen.getByLabelText("Previous Page"))
      expect(onPreviousClick).toHaveBeenCalledTimes(1)
    })
  })
})
