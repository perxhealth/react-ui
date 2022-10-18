import * as React from "react"
import { Meta, Story } from "@storybook/react"

import {
  Center,
  Stack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'

import {
  FormDrawer,
  FormDrawerProps,
} from "../../../src/components/overlay/FormDrawer"

const meta: Meta = {
  title: "Components/Overlay/FormDrawer",
  component: FormDrawer,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<FormDrawerProps> = (args) => {
  const disclosure = useDisclosure()

  return (
    <Center py="12" h="100%">
      <Button onClick={disclosure.onOpen}>Schedule a dose</Button>
      <FormDrawer isOpen={disclosure.isOpen} {...args} />
    </Center>
  )
}

export const Default = Template.bind({})

Default.args = {
  formId: "dose-form",
  title: "Schedule a dose",
  children: (
      <form id="dose-form" onSubmit={(e) => {alert("submitted!"); e.preventDefault()}}>
        <Stack spacing="3">
          <FormControl>
            <FormLabel>Medication</FormLabel>
            <Select placeholder="">
              <option value="panadol">Panadol</option>
              <option value="nurofen">Nurofen</option>
              <option value="panadeine forte">Panadeine Forte</option>
            </Select>
            <FormHelperText>Choose from your existing prescriptions</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Frequency</FormLabel>
            <Select placeholder="">
              <option value="as-needed">As needed</option>
              <option value="6-hours">Every 6 hours</option>
              <option value="12-hours">Every 12 hours</option>
            </Select>
            <FormHelperText>How often have you been instructed to take this dose?</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea placeholder="Jot down some notes" rows={50} />
          </FormControl>
        </Stack>
      </form>
  ),
}
