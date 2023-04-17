import * as React from "react"
import { vi, describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { PhoneInput, PhoneInputProps, CountryCode } from "./PhoneInput"

describe("PhoneInput", () => {
  const onChange = vi.fn()

  // render a PhoneInput component with sane, overridable defaults
  const setup = (props?: Partial<PhoneInputProps>) => {
    const defaultProps: PhoneInputProps = {
      onChange: onChange,
    }

    return {
      user: userEvent.setup(),
      ...render(<PhoneInput {...defaultProps} {...props} />),
    }
  }

  describe("props", () => {
    describe("initialCountryCode", () => {
      describe("AU", () => {
        it("shows Australia's calling code", () => {
          const { getByText } = setup({ initialCountryCode: CountryCode.AU })
          expect(getByText("+61")).toBeDefined()
        })

        it("has Australia selected in dropdown", () => {
          const { getByRole } = setup({ initialCountryCode: CountryCode.AU })
          const option = getByRole("option", {
            name: "Australia",
          }) as HTMLOptionElement
          expect(option.selected).toBe(true)
        })
      })

      describe("US", () => {
        it("shows United States calling code", () => {
          const { getByText } = setup({ initialCountryCode: CountryCode.US })
          expect(getByText("+1")).toBeDefined()
        })

        it("has United States selected in dropdown", () => {
          const { getByRole } = setup({ initialCountryCode: CountryCode.US })
          const option = getByRole("option", {
            name: "United States of America",
          }) as HTMLOptionElement
          expect(option.selected).toBe(true)
        })
      })
    })

    describe("showPlaceholderExampleNumber", () => {
      describe("is true", () => {
        it("sets the input's placeholder text to the current country's example number", () => {
          const { getByPlaceholderText } = setup({
            showPlaceholderExampleNumber: true,
          })
          expect(getByPlaceholderText("491 570 006")).toBeInTheDocument()
        })
      })

      describe("is false", () => {
        it("does not set placeholder text", () => {
          const { queryByPlaceholderText } = setup({
            showPlaceholderExampleNumber: false,
          })
          expect(queryByPlaceholderText("491 570 006")).not.toBeInTheDocument()
        })
      })
    })
  })

  describe("sanitisation", () => {
    describe("spaces", () => {
      it("disallows spaces", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "491 570 156")
        expect(getByRole("textbox")).toHaveValue("491570156")
      })

      it("does not report spaces to onChange", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "491 570 156")
        expect(onChange).lastCalledWith("+61491570156")
        expect(onChange).toHaveBeenCalledTimes(9)
      })
    })

    describe("a-z", () => {
      it("does not persist a-z characters", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "491d570s156")
        expect(getByRole("textbox")).toHaveValue("491570156")
      })

      it("does not report a-z characters to onChange", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "491d570s156")
        expect(onChange).lastCalledWith("+61491570156")
        expect(onChange).toHaveBeenCalledTimes(9)
      })
    })
  })

  describe("country selection", () => {
    describe("AU", () => {
      it("shows the calling code", async () => {
        const { getByText, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "AU")
        expect(getByText("+61")).toBeDefined()
      })

      it("reports back the correct calling code", async () => {
        const { getByRole, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "AU")
        await user.type(getByRole("textbox"), "491570156")
        expect(onChange).toHaveBeenCalledWith("+614")
        expect(onChange).toHaveBeenCalledWith("+61491570156")
      })
    })

    describe("US", () => {
      it("shows the calling code", async () => {
        const { getByText, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "US")
        expect(getByText("+1")).toBeDefined()
      })

      it("reports back the correct calling code", async () => {
        const { getByRole, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "US")
        await user.type(getByRole("textbox"), "491570156")
        expect(onChange).toHaveBeenCalledWith("+14")
        expect(onChange).toHaveBeenCalledWith("+1491570156")
      })
    })
  })
})
