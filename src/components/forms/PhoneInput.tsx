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

export interface Props extends InputProps {
  initialCountryCode?: "AU" | "US"
}

export const PhoneInput = (props: Props) => {
  const { initialCountryCode = "AU", ...inputProps } = props

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
      const inputValue = event.target.value

      if (!/^[0-9\b]+$/.test(inputValue)) event.preventDefault()

      const updatedEvent = {
        ...event,
        target: { ...event.target, value: `+${inputValue}` },
      }

      inputProps.onChange && inputProps.onChange(updatedEvent)
    },
    [inputProps.onChange]
  )

  return (
    <InputGroup>
      <InputLeftAddon children={countries[selectedCountry].callingCode} />
      <Input
        placeholder={countries[selectedCountry].examplePhoneNumber}
        onChange={onInputChange}
        maxLength={countries[selectedCountry].allowedLength}
        {...inputProps}
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
            const [countryName, countryData] = country
            return (
              <option value={countryName} key={countryName}>
                {countryName}{" "}
                <span role="img" aria-label={countryName}>
                  {countryData.emoji}
                </span>
              </option>
            )
          })}
        </Select>
      </InputRightAddon>
    </InputGroup>
  )
}
