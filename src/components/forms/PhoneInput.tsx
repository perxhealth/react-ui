import * as React from "react"

import {
  InputProps,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Select,
} from "@chakra-ui/react"

export enum CountryName {
  AU = "Australia",
  US = "United States of America",
}

export type SelectableCountries = {
  [key in CountryName]: {
    emoji: string
    allowedLength: number
    callingCode: `+${string}`
    examplePhoneNumber: string
  }
}

const countries: SelectableCountries = {
  [CountryName.AU]: {
    emoji: "🇦🇺",
    allowedLength: 9,
    callingCode: "+61",
    examplePhoneNumber: "491 570 006",
  },
  [CountryName.US]: {
    emoji: "🇺🇸",
    allowedLength: 10,
    callingCode: "+1",
    examplePhoneNumber: "555 123 4567",
  },
}

export interface Props extends Omit<InputProps, "maxLength"> {
  initialCountryCode?: "AU" | "US"
}

export const PhoneInput = (props: Props) => {
  const { initialCountryCode = "AU", ...rest } = props
  const { onChange = () => {}, ...inputProps } = rest

  const [selectedCountry, setSelectedCountry] = React.useState<CountryName>(
    CountryName[initialCountryCode]
  )

  const onCountryChange = React.useCallback(
    (event) => {
      setSelectedCountry(event.target.value)
    },
    [setSelectedCountry]
  )

  const onInputChange = React.useCallback(
    (event) => {
      // Format the entered number
      const { callingCode } = countries[selectedCountry]
      const formattedNumber = `${callingCode}${event.target.value.replace(
        callingCode,
        ""
      )}`
      // Create a new input event with a formatted version of the number
      onChange({
        ...event,
        target: {
          ...event.target,
          value: formattedNumber,
        },
      })
    },
    [onChange, selectedCountry]
  )

  return (
    <InputGroup>
      <InputLeftAddon children={countries[selectedCountry].callingCode} />
      <Input
        placeholder={countries[selectedCountry].examplePhoneNumber}
        {...inputProps}
        maxLength={countries[selectedCountry].allowedLength}
        onChange={onInputChange}
        bg="white"
      />
      <InputRightAddon p="0">
        <Select
          onChange={onCountryChange}
          border="none"
          value={selectedCountry}
          aria-label="country select"
          _focus={{ border: "none" }}
        >
          {Object.entries(countries).map((country) => {
            const [countryName] = country
            return (
              <option value={countryName} key={countryName}>
                {countryName}
              </option>
            )
          })}
        </Select>
      </InputRightAddon>
    </InputGroup>
  )
}
