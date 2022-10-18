import * as React from "react"
import { Box } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import {
  TestingTools,
  TestingToolsProps,
} from "../../../src/components/overlay/TestingTools"

const meta: Meta = {
  title: "Components/Overlay/TestingTools",
  component: TestingTools,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TestingToolsProps> = (args) => (
  <Box pos="relative" height="100vh" margin="-1rem">
    <TestingTools {...args} />
  </Box>
)

export const Default = Template.bind({})

Default.args = {
  apiConfig: {
    region: "au",
    environment: "prod",
  },
}
