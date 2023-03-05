import * as React from "react"

import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ReferralStatusTag } from "./ReferralStatusTag"
import { ReferralStatus } from "../../../types"

describe("ReferralStatusTag", () => {
  // render a ReferralStatusTag component with sane, overridable defaults
  const setup = (status: ReferralStatus = ReferralStatus.Converted) => {
    return {
      user: userEvent.setup(),
      ...render(<ReferralStatusTag status={status} />),
    }
  }

  describe("status", () => {
    describe("invited", () => {
      it("renders the correct label", () => {
        const { getByText } = setup(ReferralStatus.Invited)
        expect(getByText("Invited")).toBeInTheDocument()
      })
    })

    describe("converted", () => {
      it("renders the correct label", () => {
        const { getByText } = setup(ReferralStatus.Converted)
        expect(getByText("Converted")).toBeInTheDocument()
      })
    })

    describe("offboarded", () => {
      it("renders the correct label", () => {
        const { getByText } = setup(ReferralStatus.Offboarded)
        expect(getByText("Offboarded")).toBeInTheDocument()
      })
    })

    describe("cancelled", () => {
      it("renders the correct label", () => {
        const { getByText } = setup(ReferralStatus.Cancelled)
        expect(getByText("Cancelled")).toBeInTheDocument()
      })
    })
  })
})
