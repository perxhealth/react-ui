import * as React from "react"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"

import { PhoneInput, CountryCode } from "../PhoneInput"

describe("PhoneInput", () => {
  const onChange = jest.fn()

  describe("props", () => {
    describe("initialCountryCode", () => {
      describe("AU", () => {
        beforeEach(() => {
          render(
            <PhoneInput
              onChange={onChange}
              initialCountryCode={CountryCode.AU}
            />
          )
        })

        it("shows Australia's calling code", () => {
          expect(screen.getByText("+61")).toBeInTheDocument()
        })

        it("has Australia selected in dropdown", () => {
          const selectComponent = screen.getByRole("option", {
            name: "Australia",
          }) as HTMLOptionElement
          expect(selectComponent.selected).toBe(true)
        })
      })

      describe("US", () => {
        beforeEach(() => {
          render(
            <PhoneInput
              onChange={onChange}
              initialCountryCode={CountryCode.US}
            />
          )
        })

        it("shows United States calling code", () => {
          expect(screen.getByText("+1")).toBeInTheDocument()
        })

        it("has United States selected in dropdown", () => {
          const selectComponent = screen.getByRole("option", {
            name: "United States of America",
          }) as HTMLOptionElement
          expect(selectComponent.selected).toBe(true)
        })
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
      beforeEach(() => {
        user.selectOptions(screen.getByLabelText("Select a country"), "AU 🇦🇺")
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
      beforeEach(() => {
        user.selectOptions(screen.getByLabelText("Select a country"), "US 🇺🇸")
      })

      it("shows the calling code", () => {
        expect(screen.getByText("+1")).toBeInTheDocument()
      })

      describe("user enters number", () => {
        it("reports back as it's typed", () => {
          user.type(screen.getByRole("textbox"), "5559876543")
          expect(onChange).toHaveBeenCalledWith("+15")
          expect(onChange).toHaveBeenCalledWith("+15559876543")
        })
      })
    })
  })
})
