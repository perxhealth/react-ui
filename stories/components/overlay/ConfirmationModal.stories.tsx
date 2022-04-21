import * as React from "react"
import { Meta, Story } from "@storybook/react"

import { Text, Button, Center, useBoolean } from "@chakra-ui/react"

import {
  ConfirmationModal,
  ConfirmationModalProps,
} from "../../../src/components/overlay/ConfirmationModal"

const meta: Meta = {
  title: "Components/Overlay/ConfirmationModal",
  component: ConfirmationModal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ConfirmationModalProps> = (args) => {
  const [isOpen, setIsOpen] = useBoolean()

  return (
    <Center py="12" h="100%">
      <Button onClick={setIsOpen.on}>Open Modal</Button>
      <ConfirmationModal {...args} isOpen={isOpen} onCancel={setIsOpen.off} />
    </Center>
  )
}

export const Default = Template.bind({})

Default.args = {
  children: <Text>Are you sure you want to delete?</Text>,
}
