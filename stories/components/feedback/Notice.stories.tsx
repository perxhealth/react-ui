import * as React from "react"
import { Center, Box } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import { Notice, NoticeProps } from "../../../src/components/feedback/Notice"

const meta: Meta = {
  title: "Components/Feedback/Notice",
  component: Notice,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<NoticeProps> = (args) => (
  <Center>
    <Box width="md">
      <Notice {...args} />
    </Box>
  </Center>
)

export const Default = Template.bind({})
export const Description = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})

Default.args = {
  title: "Remember to drink water",
}

Description.args = {
  title: "Remember to drink water",
  description: "It's important to stay hydrated",
}

Success.args = {
  title: "Remember to drink water",
  description: "You're on track for today!",
  status: "success",
}

Warning.args = {
  title: "Remember to drink water",
  description: "Drink some now to stay on track",
  status: "warning",
}

Error.args = {
  title: "Remember to drink water",
  description: "You didn't drink enough!",
  status: "error",
}
