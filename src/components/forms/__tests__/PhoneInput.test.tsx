import * as React from "react"
import { screen, render, cleanup } from "@testing-library/react"
import user from "@testing-library/user-event"

import { PhoneInput, CountryCode } from "../PhoneInput"

describe("PhoneInput", () => {
  const onChange = jest.fn()

  describe("props", () => {
    describe("initialCountryCode", () => {
      describe("AU", () => {
        // 1. render and expect australia's calling code
        // 1. render and expect australia is selected in the dropdown
      })

      describe("US", () => {
        // 1. render and expect usa's calling code
        // 1. render and expect usa is selected in the dropdown
      })
    })
  })

  describe("sanitisation", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} />)
    })

    describe("disallows spaces", () => {
      // 1. type in a number with some spaces
      // 2. ensure space is not visible in the textbox
      // 3. ensure space was not included in onChange call
    })

    describe("disallows a-z", () => {
      // 1. type in a number with some letters
      // 2. ensure letters are not visible in the textbox
      // 3. ensure letters are not included in onChange call
    })
  })

  describe("countries", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} />)
    })

    describe("AU", () => {
      beforeAll(() => {
        user.selectOptions(screen.getByText("Select a country"), "AU")
      })

      it("shows the calling code", () => {
        expect(screen.getByText("+61")).toBeInTheDocument()
      })

      describe("user enters number", () => {
        it("reports back as it's typed", () => {
          user.type(screen.getByRole("textbox"), "425078349")
          expect(onChange).toHaveBeenCalledWith("+614")
          expect(onChange).toHaveBeenCalledWith("+61425078349")
        })
      })
    })

    describe("US", () => {
      ...
    })
  })
})

