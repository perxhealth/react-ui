import * as React from "react"
import { Box } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import { Footer, FooterProps } from "../../../src/components/layout/Footer"

const meta: Meta = {
  title: "Components/Layout/Footer",
  component: Footer,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<FooterProps> = (args) => (
  <Box px="2" py="6">
    <Footer {...args} />
  </Box>
)

export const Default = Template.bind({})
export const Mobile = Template.bind({})
export const Tablet = Template.bind({})

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
}

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
