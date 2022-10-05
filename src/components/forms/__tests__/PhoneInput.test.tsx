import * as React from "react"
import { screen, render, cleanup } from "@testing-library/react"
import user from "@testing-library/user-event"

import { PhoneInput } from "../PhoneInput"

afterEach(cleanup)

describe("PhoneInput", () => {
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("when no default country is provided", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} />)
    })

    it("displays the correct country code", async () => {
      expect(screen.getByText("+61")).toBeInTheDocument()
    })

    it("returns a valid phone number", () => {
      user.type(screen.getByPlaceholderText("491 570 006"), "610g933s38994")
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({value: "+61499833390"})
      )
    })

    it("changes country code", () => {
      user.selectOptions(
        screen.getByLabelText("country select"),
        "United States of America"
      )
      user.type(screen.getByPlaceholderText("555 123 4567"), "123s456f789w103")
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({value: "+13098765432"})
      )
    })
  })

  describe("when default country is provided", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} initialCountryCode="US" />)
    })

    it("displays the correct country code", async () => {
      expect(screen.getByText("+1")).toBeInTheDocument()
    })

    it("returns a valid phone number", async () => {
      user.type(screen.getByPlaceholderText("555 123 4567"), "123s456f789w103")
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({value: "+13098765432"})
      )
    })
  })
})
