import * as React from "react"
import { screen, render } from "@testing-library/react"

import { ReferralStatusTag } from "../ReferralStatusTag"
import { ReferralStatus } from "../../../../types"

describe("ReferralStatusTag", () => {
  describe("status", () => {
    describe("invited", () => {
      beforeEach(() =>
        render(<ReferralStatusTag status={ReferralStatus.Invited} />)
      )

      it("renders the correct label", () => {
        expect(screen.getByText("Invited")).toBeInTheDocument()
      })
    })

    describe("converted", () => {
      beforeEach(() =>
        render(<ReferralStatusTag status={ReferralStatus.Converted} />)
      )

      it("renders the correct label", () => {
        expect(screen.getByText("Converted")).toBeInTheDocument()
      })
    })

    describe("offboarded", () => {
      beforeEach(() =>
        render(<ReferralStatusTag status={ReferralStatus.Offboarded} />)
      )

      it("renders the correct label", () => {
        expect(screen.getByText("Offboarded")).toBeInTheDocument()
      })
    })

    describe("cancelled", () => {
      beforeEach(() =>
        render(<ReferralStatusTag status={ReferralStatus.Cancelled} />)
      )

      it("renders the correct label", () => {
        expect(screen.getByText("Cancelled")).toBeInTheDocument()
      })
    })
  })
})
