import * as React from "react"

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputProps as ChakraInputProps,
  Select,
} from "@chakra-ui/react"

export type E164Number = string

export enum CountryCode {
  AU = "AU",
  US = "US",
}

export interface CountryData {
  name: string
  emoji: string
  countryCode: string
  // TODO use template literal type once we've migrated away from tsdx
  // and outdated prettier
  callingCode: string
  allowedNumberLength: number
  exampleNumber: string
}

export type Countries = {
  [key in CountryCode]: CountryData
}

const countries: Countries = {
  [CountryCode.AU]: {
    name: "Australia",
    emoji: "🇦🇺",
    countryCode: "AU",
    callingCode: "+61",
    allowedNumberLength: 9,
    exampleNumber: "491 570 006",
  },
  [CountryCode.US]: {
    name: "United States of America",
    emoji: "🇺🇸",
    countryCode: "US",
    callingCode: "+1",
    allowedNumberLength: 10,
    exampleNumber: "555 123 4567",
  },
}

export type InputProps = Omit<
  ChakraInputProps,
  "onChange" | "maxLength" | "value"
>

export interface Props extends InputProps {
  onChange?: (number: E164Number) => void
  initialCountryCode?: CountryCode
}

export const PhoneInput = (props: Props) => {
  // Destructure props to use directly
  const {
    onChange = () => {},
    initialCountryCode = CountryCode.AU,
    ...inputProps
  } = props

  // Keep a piece of state to track the user's phone number input
  const [number, setNumber] = React.useState<string>("")

  // Keep a piece of state to track the user's country selection
  const [currentCountry, setCurrentCountry] = React.useState<CountryData>(
    countries[initialCountryCode]
  )

  // Persist the user's country selection to state
  const onCountryChange = React.useCallback(
    (event) => {
      setCurrentCountry(countries[event.target.value as CountryCode])
      setNumber("")
    },
    [setCurrentCountry, setNumber]
  )

  // Handle when the user enters a new character by sanitising their input
  // and proxying the then E164 formatted number to `props.onChange`
  const onInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      // Allow only numeric input
      if (value === "" || /^[0-9\b]+$/.test(value)) {
        // Persist the internally controlled value
        setNumber(value)
        // Format the number as E164 and send it along
        onChange(`${currentCountry.callingCode}${value}`)
      } else {
        event.preventDefault()
      }
    },
    [setNumber, currentCountry, onChange]
  )

  return (
    <InputGroup>
      <InputLeftAddon fontFamily="monospace">
        {currentCountry.callingCode}
      </InputLeftAddon>

      <Input
        {...inputProps}
        maxLength={currentCountry.allowedNumberLength}
        onChange={onInputChange}
        value={number}
      />

      <InputRightAddon padding="0">
        <Select
          border="none"
          bg="transparent"
          aria-label="Select a country"
          defaultValue={currentCountry.countryCode}
          onChange={onCountryChange}
        >
          {Object.values(countries).map((country) => {
            const { countryCode, name, emoji } = country
            return (
              <option aria-label={name} value={countryCode} key={countryCode}>
                {countryCode} {emoji}
              </option>
            )
          })}
        </Select>
      </InputRightAddon>
    </InputGroup>
  )
}
