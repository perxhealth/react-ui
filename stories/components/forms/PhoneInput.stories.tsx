import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Container } from "@chakra-ui/react"

import {
  PhoneInput,
  Props,
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

const Template: Story<Props> = (args) => (
  <Container maxW="container.sm" py="6">
    <PhoneInput {...args} />
  </Container>
)

export const Default = Template.bind({})

Default.args = {
  initialCountryCode: CountryCode.AU,
}
