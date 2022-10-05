import * as React from "react"
import parsePhoneNumber from "libphonenumber-js"

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
    callingCode: `+${string}`
    emoji: string
    examplePhoneNumber: string
  }
}

const countries: SelectableCountries = {
  [CountryName.AU]: {
    callingCode: "+61",
    emoji: "🇦🇺",
    examplePhoneNumber: "491 570 006",
  },
  [CountryName.US]: {
    callingCode: "+1",
    emoji: "🇺🇸",
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
      if (/^[0-9\b]+$/.test(inputValue)) {
        switch (selectedCountry) {
          case CountryName.AU: {
            const phoneNumber = parsePhoneNumber(inputValue, "AU")
            const updatedEvent = { ...event, target: { ...event.target, value: phoneNumber }}
            inputProps.onChange && inputProps.onChange(updatedEvent)
            break;
          }
          case CountryName.US: {
            const phoneNumber = parsePhoneNumber(inputValue, "US")
            const updatedEvent = { ...event, target: { ...event.target, value: phoneNumber}}
            inputProps.onChange && inputProps.onChange(updatedEvent)
            break;
          }
        }
      }
    },
    [inputProps.onChange]
  )

  return (
    <InputGroup>
      <InputLeftAddon children={countries[selectedCountry].callingCode} />
      <Input
        placeholder={countries[selectedCountry].examplePhoneNumber}
        onChange={onInputChange}
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
