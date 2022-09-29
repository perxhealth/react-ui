import * as React from "react"

import {
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Select,
} from "@chakra-ui/react"

export interface PhoneInputProps {
  onChange: (phoneNumber: string) => void
  defaultCountry?: "AU" | "US"
}

export const PhoneInput = (props: PhoneInputProps) => {
  const { onChange, defaultCountry = "AU" } = props

  const [country, setCountry] = React.useState(defaultCountry)
  const [number, setNumber] = React.useState()

  const isAustralia = country === "AU"

  const onCountrySelectChange = React.useCallback(
    (event) => {
      setCountry(event.target.value)
    },
    [setCountry]
  )

  const onInputChange = React.useCallback(
    (event) => {
      const inputValue = event.target.value
      if (/^[0-9\b]+$/.test(inputValue)) {
        if (isAustralia) {
          const phoneNumber = inputValue.startsWith("61")
            ? inputValue.slice(2)
            : inputValue
          setNumber(phoneNumber)
          onChange(phoneNumber)
        } else {
          const phoneNumber = inputValue.startsWith("1")
            ? inputValue.slice(1)
            : inputValue
          setNumber(phoneNumber)
          onChange(phoneNumber)
        }
      }
      inputValue === "" && setNumber(undefined)
    },
    [isAustralia]
  )

  return (
    <InputGroup>
      <InputLeftAddon children={isAustralia ? "+61" : "+1"} />
      <Input
        placeholder={isAustralia ? "412 345 678" : "555 123 4567"}
        onChange={onInputChange}
        value={number}
        bg="white"
      />
      <InputRightAddon p="0">
        <Select
          border="none"
          _focus={{ border: "none" }}
          value={country}
          onChange={onCountrySelectChange}
        >
          <option value="AU">AU 🇦🇺</option>
          <option value="US">US 🇺🇸</option>
        </Select>
      </InputRightAddon>
    </InputGroup>
  )
}
