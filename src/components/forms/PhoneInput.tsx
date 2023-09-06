import * as React from "react"
import {
  parsePhoneNumber,
  CountryCode as LibCountryCode,
} from "libphonenumber-js"

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

export enum Format {
  LOCAL = "local",
  INTERNATIONAL = "international",
}

export interface CountryData {
  name: string
  emoji: string
  countryCode: string
  callingCode: `+${string}`
  maxNumberLength: number
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
    maxNumberLength: 9,
    exampleNumber: "491 570 006",
  },
  [CountryCode.US]: {
    name: "United States of America",
    emoji: "🇺🇸",
    countryCode: "US",
    callingCode: "+1",
    maxNumberLength: 10,
    exampleNumber: "555 123 4567",
  },
}

type InputProps = Omit<ChakraInputProps, "onChange" | "maxLength" | "value">

export interface PhoneInputProps extends InputProps {
  format?: Format
  initialCountryCode?: CountryCode
  showPlaceholderExampleNumber?: boolean
  onChange?: (number: E164Number) => void
  onValidatePhoneNumber?: (isValid: boolean) => void
}

export const PhoneInput = (props: PhoneInputProps) => {
  // Destructure props to use directly
  const {
    onChange,
    onValidatePhoneNumber,
    format = Format.INTERNATIONAL,
    initialCountryCode = CountryCode.AU,
    showPlaceholderExampleNumber = false,
    ...inputProps
  } = props

  // Keep a piece of state to track the user's phone number input
  const [number, setNumber] = React.useState<string>("")

  // Keep a piece of state to track the user's country selection
  const [currentCountry, setCurrentCountry] = React.useState<CountryData>(
    countries[initialCountryCode]
  )

  const isInternational = format === Format.INTERNATIONAL

  // Determine the input's placeholder attribute value, if any
  const inputPlaceholder = React.useMemo(() => {
    return showPlaceholderExampleNumber ? currentCountry.exampleNumber : ""
  }, [currentCountry, showPlaceholderExampleNumber])

  // Persist the user's country selection to state
  const onCountryChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        const parsedPhoneNumber = parsePhoneNumber(
          `${isInternational && currentCountry.callingCode}${value}`,
          currentCountry.countryCode as LibCountryCode
        )

        if (onChange) {
          onChange(parsedPhoneNumber.number)
        }

        if (onValidatePhoneNumber) {
          onValidatePhoneNumber(parsedPhoneNumber.isPossible())
        }
      } else {
        event.preventDefault()
      }
    },
    [setNumber, currentCountry, onChange]
  )

  return (
    <InputGroup>
      {isInternational && (
        <InputLeftAddon fontFamily="monospace" minW="60px" textAlign="center">
          {currentCountry.callingCode}
        </InputLeftAddon>
      )}

      <Input
        {...inputProps}
        placeholder={inputPlaceholder}
        maxLength={currentCountry.maxNumberLength}
        onChange={onInputChange}
        value={number}
      />

      {isInternational && (
        <InputRightAddon padding="0">
          <Select
            border="none"
            bg="transparent"
            aria-label="Select a country"
            defaultValue={currentCountry.countryCode}
            onChange={onCountryChange}>
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
      )}
    </InputGroup>
  )
}
