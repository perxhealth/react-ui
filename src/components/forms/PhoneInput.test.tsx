import * as React from "react"
import { vi, describe, it, expect } from "vitest"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { parsePhoneNumber } from "libphonenumber-js"

import { PhoneInput, PhoneInputProps, CountryCode, Format } from "./PhoneInput"

vi.mock("libphonenumber-js", () => ({
  parsePhoneNumber: vi.fn(),
}))

describe("PhoneInput", () => {
  const onChange = vi.fn()
  const onValidatePhoneNumber = vi.fn()

  // render a PhoneInput component with sane, overridable defaults
  const setup = (props?: Partial<PhoneInputProps>) => {
    const defaultProps: PhoneInputProps = {
      onChange: onChange,
      onValidatePhoneNumber: onValidatePhoneNumber,
    }

    return {
      user: userEvent.setup(),
      ...render(<PhoneInput {...defaultProps} {...props} />),
    }
  }

  beforeEach(() => {
    vi.resetAllMocks()
  })

  beforeEach(() => {
    vi.mocked(parsePhoneNumber, { partial: true }).mockReturnValue({
      number: "+61491570156",
      isPossible: () => true,
    })
  })

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
        expect(parsePhoneNumber).toHaveBeenCalledWith("4", "AU")
        expect(onChange).toHaveBeenCalledWith("+61491570156")
      })
    })

    describe("US", () => {
      beforeEach(() => {
        vi.mocked(parsePhoneNumber, { partial: true }).mockReturnValue({
          number: "+1491570156",
          isPossible: () => true,
        })
      })

      it("shows the calling code", async () => {
        const { getByText, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "US")
        expect(getByText("+1")).toBeDefined()
      })

      it("reports back the correct calling code", async () => {
        const { getByRole, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "US")
        await user.type(getByRole("textbox"), "491570156")
        expect(parsePhoneNumber).toHaveBeenCalledWith("4", "US")
        expect(onChange).toHaveBeenCalledWith("+1491570156")
      })
    })
  })

  describe("number validation", () => {
    describe("is not possible", () => {
      beforeEach(() => {
        vi.mocked(parsePhoneNumber, { partial: true }).mockReturnValue({
          number: "491570156",
          isPossible: () => false,
        })
      })

      it("reports back that number is not possible", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "4915701")
        await waitFor(() => {
          expect(onValidatePhoneNumber).toHaveBeenCalled()
        })
        expect(onValidatePhoneNumber).toHaveBeenCalledWith(false)
      })
    })

    describe("is possible", () => {
      beforeEach(() => {
        vi.mocked(parsePhoneNumber, { partial: true }).mockReturnValue({
          isPossible: () => true,
        })
      })

      it("reports back that number is possible", async () => {
        const { getByRole, user } = setup()
        await user.type(getByRole("textbox"), "491570156")
        await waitFor(() => {
          expect(onValidatePhoneNumber).toHaveBeenCalled()
        })
        expect(onValidatePhoneNumber).toHaveBeenCalledWith(true)
      })
    })
  })

  describe("format selection", () => {
    beforeEach(() => {
      vi.mocked(parsePhoneNumber, { partial: true }).mockReturnValue({
        number: "491570156",
        isPossible: () => true,
      })
    })

    describe("is local", () => {
      it("hides prefix", async () => {
        const { queryByText } = setup({ format: Format.LOCAL })
        expect(queryByText("+1")).not.toBeInTheDocument()
        expect(queryByText("+61")).not.toBeInTheDocument()
      })

      it("hides suffix", async () => {
        const { queryByRole } = setup({ format: Format.LOCAL })
        expect(queryByRole("options")).not.toBeInTheDocument()
      })

      it("reports back the number without calling code", async () => {
        const { getByRole, getByLabelText, user } = setup()
        await user.selectOptions(getByLabelText("Select a country"), "AU")
        await user.type(getByRole("textbox"), "491570156")
        expect(onChange).toHaveBeenCalledWith("491570156")
      })
    })
  })
})
