import * as React from "react"
import { Meta, Story } from "@storybook/react"

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Center,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

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
  const disclosure = useDisclosure()

  return (
    <Center py="12" h="100%">
      <Button onClick={disclosure.onOpen}>Click to open modal</Button>
      <ConfirmationModal isOpen={disclosure.isOpen} {...args} />
    </Center>
  )
}

export const Default = Template.bind({})

Default.args = {
  children: (
    <Stack spacing="3">
      <Text fontSize="xl">
        <strong>9,815</strong> referrals pending confirmation
      </Text>

      <Text>
        Your referrals are locked, loaded and ready to go. Please perform one
        final check of the data below, and click Confirm when you are ready.
      </Text>

      <Alert status="warning" variant="left-accent">
        <AlertIcon />
        <AlertTitle fontWeight="normal">
          Displaying only your first 3 referrals as a preview
        </AlertTitle>
      </Alert>

      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>First name</Th>
            <Th>Last name</Th>
            <Th>Phone number</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>AIUJ111</Td>
            <Td>John</Td>
            <Td>Appleseed</Td>
            <Td>0491570156</Td>
          </Tr>

          <Tr>
            <Td>KFL743</Td>
            <Td>Mary</Td>
            <Td>Citizen</Td>
            <Td>0491570157</Td>
          </Tr>

          <Tr>
            <Td>PFC082</Td>
            <Td>Billy</Td>
            <Td>Billyson</Td>
            <Td>0491570158</Td>
          </Tr>
        </Tbody>
      </Table>
    </Stack>
  ),
}
