import * as React from "react"
import { Center } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import { ToastNotification, ToastNotificationProps } from "../../../src/components/feedback/ToastNotification"

const meta: Meta = {
  title: "Components/Feedback/ToastNotification",
  component: ToastNotification,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ToastNotificationProps> = (args) => (
  <Center py="4">
    <ToastNotification {...args} />
  </Center>
)

export const Default = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const CustomButton = Template.bind({})

Default.args = {
  title: "Pikachu used Thunderbolt!",
  subtitle: "It was super effective. Squirtle fainted.",
  status: "info",
}

Success.args = {
  title: "What? Pikachu is evolving!",
  subtitle: "Your Pikachu evolved in to Raichu!",
  status: "success",
}

Warning.args = {
  title: "Pikachu used Thunderbolt!",
  subtitle: "It wasn't very effective.",
  status: "warning",
}

Error.args = {
  title: "Pikachu used Thunderbolt!",
  subtitle: "The attack missed!",
  status: "error"
}

CustomButton.args = {
  title: "Wild Mewtwo appeared!",
  subtitle: "Choose a Pokemon",
  customButtonText: "Use Masterball",
}
