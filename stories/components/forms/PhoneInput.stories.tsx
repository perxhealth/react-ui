import * as React from "react"
import { Meta, Story } from "@storybook/react"

import {
  PhoneInput,
  PhoneInputProps,
} from "../../../src/components/display/PhoneInput"

const meta: Meta = {
  title: "Components/Display/PhoneInput",
  component: PhoneInput,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PhoneInputProps> = (args) => <PhoneInput {...args} />

export const Default = Template.bind({})
export const DefaultCountry = Template.bind({})

DefaultCountry.args = {
  defaultCountry: "US",
}
