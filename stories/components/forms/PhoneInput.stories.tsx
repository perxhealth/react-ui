import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"

import {
  PhoneInput,
  PhoneInputProps,
  CountryCode,
} from "../../../src/components/forms/PhoneInput"

const meta: Meta = {
  title: "Components/Forms/PhoneInput",
  component: PhoneInput,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PhoneInputProps> = (args) => (
  <Container maxW="container.sm" py="6">
    <PhoneInput {...args} />
  </Container>
)

export const Default = Template.bind({})
export const Placeholder = Template.bind({})
export const HidePrefix = Template.bind({})
export const HideSuffix = Template.bind({})
export const HideAffixes = Template.bind({})

Default.args = {
  initialCountryCode: CountryCode.AU,
}

Placeholder.args = {
  initialCountryCode: CountryCode.AU,
  showPlaceholderExampleNumber: true,
}

HidePrefix.args = {
  initialCountryCode: CountryCode.AU,
  showPrefix: false,
}

HideSuffix.args = {
  initialCountryCode: CountryCode.AU,
  showSuffix: false,
}

HideAffixes.args = {
  initialCountryCode: CountryCode.AU,
  showPrefix: false,
  showSuffix: false,
}
