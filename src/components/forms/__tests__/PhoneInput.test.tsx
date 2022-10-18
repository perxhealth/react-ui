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
          const option = screen.getByRole("option", {
            name: "Australia",
          }) as HTMLOptionElement
          expect(option.selected).toBe(true)
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
          const option = screen.getByRole("option", {
            name: "United States of America",
          }) as HTMLOptionElement
          expect(option.selected).toBe(true)
        })
      })
    })

    describe("showPlaceholderExampleNumber", () => {
      describe("is true", () => {
        beforeEach(() =>
          render(
            <PhoneInput
              onChange={onChange}
              initialCountryCode={CountryCode.AU}
              showPlaceholderExampleNumber={true}
            />
          )
        )

        it("sets the input's placeholder text to the current country's example number", () => {
          expect(screen.getByPlaceholderText("491 570 006")).toBeInTheDocument()
        })
      })

      describe("is false", () => {
        beforeEach(() =>
          render(
            <PhoneInput
              onChange={onChange}
              initialCountryCode={CountryCode.AU}
              showPlaceholderExampleNumber={false}
            />
          )
        )

        it("does not set any placeholder text on the input", () => {
          expect(
            screen.queryByPlaceholderText("491 570 006")
          ).not.toBeInTheDocument()
        })
      })
    })
  })

  describe("sanitisation", () => {
    beforeEach(() => {
      render(<PhoneInput onChange={onChange} />)
    })

    describe("disallows spaces", () => {
      beforeEach(() => {
        user.type(screen.getByRole("textbox"), "491 570 156")
      })

      it("doesn't show spaces in text box", () => {
        const input = screen.getByRole("textbox") as HTMLInputElement
        expect(input.value).toBe("491570156")
      })

      it("doesn't call onChange with spaces", () => {
        expect(onChange).toHaveBeenCalledWith("+61491570156")
      })
    })

    describe("disallows a-z", () => {
      beforeEach(() => {
        user.type(screen.getByRole("textbox"), "491d570s156")
      })

      it("doesn't show letters in text box", () => {
        const input = screen.getByRole("textbox") as HTMLInputElement
        expect(input.value).toBe("491570156")
      })

      it("doesn't call onChange with letters", () => {
        expect(onChange).toHaveBeenCalledWith("+61491570156")
      })
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
          user.type(screen.getByRole("textbox"), "491570156")
          expect(onChange).toHaveBeenCalledWith("+614")
          expect(onChange).toHaveBeenCalledWith("+61491570156")
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
