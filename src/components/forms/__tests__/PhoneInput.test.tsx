import * as React from "react"
import { screen, render, cleanup } from "@testing-library/react"
import user from "@testing-library/user-event"

import { PhoneInput, CountryCode } from "../PhoneInput"

afterEach(cleanup)

describe("PhoneInput", () => {
  const onChange = jest.fn()

  describe("when no default country is provided", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} />)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it("displays the correct country code", async () => {
      expect(screen.getByText("+61")).toBeInTheDocument()
    })

    it("returns a valid phone number", () => {
      user.type(screen.getByRole("textbox"), "492916333")
      expect(onChange).toHaveBeenCalledWith("+61492916333")
    })

    it("changes country code", () => {
      user.selectOptions(
        screen.getByLabelText("Select a country"),
        "United States of America"
      )
      user.type(screen.getByRole("textbox"), "123456789103")
      expect(onChange).toHaveBeenCalledWith("+11234567891")
    })
  })

  describe("when default country is provided", () => {
    beforeEach(() => {
      render(
        <PhoneInput onChange={onChange} initialCountryCode={CountryCode.US} />
      )
    })

    it("displays the correct country code", async () => {
      expect(screen.getByText("+1")).toBeInTheDocument()
    })

    it("returns a valid phone number", async () => {
      user.type(screen.getByRole("textbox"), "123456789103")
      expect(onChange).toHaveBeenCalledWith("+1123456")
    })
  })
})
