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
export const ShowPrefix = Template.bind({})
export const ShowSuffix = Template.bind({})
export const ShowAffixes = Template.bind({})

Default.args = {
  initialCountryCode: CountryCode.AU,
}

Placeholder.args = {
  initialCountryCode: CountryCode.AU,
  showPlaceholderExampleNumber: true,
}

ShowPrefix.args = {
  initialCountryCode: CountryCode.AU,
  showPrefix: true,
}

ShowSuffix.args = {
  initialCountryCode: CountryCode.AU,
  showSuffix: true,
}

ShowAffixes.args = {
  initialCountryCode: CountryCode.AU,
  showPrefix: true,
  showSuffix: true,
}
