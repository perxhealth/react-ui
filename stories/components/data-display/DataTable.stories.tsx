import * as React from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { ColumnDef } from "@tanstack/react-table"
import { Meta, Story } from "@storybook/react"
import { faker } from "@faker-js/faker"

import { extendedTheme } from "../../../src/theme"

import {
  DataTable,
  DataTableProps,
} from "../../../src/components/data-display/data-table/DataTable"

import { DataTableColumn } from "../../../src/components/data-display/data-table/DataTableColumn"

const meta: Meta = {
  title: "Components/Data/DataTable",
  component: DataTable,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export interface FakeUser {
  firstName: string
  lastName: string
  age: number
  email: string
}

const exampleData: FakeUser[] = faker.helpers.multiple(
  () => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 20, max: 95 }),
      email: faker.internet.email(),
    }
  },
  { count: 500 }
)

const exampleColumns: Array<ColumnDef<FakeUser>> = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return <DataTableColumn column={column} label="First name" />
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return <DataTableColumn column={column} label="Last name" />
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return <DataTableColumn column={column} label="Age" />
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumn column={column} label="Email address" />
    },
  },
]

const Template: Story<DataTableProps<FakeUser, unknown>> = () => (
  <ChakraProvider theme={extendedTheme}>
    <Box px="2" py="6" rounded="lg" border="solid 1px" borderColor="gray.200">
      <DataTable columns={exampleColumns} data={exampleData} />
    </Box>
  </ChakraProvider>
)

export const Default = Template.bind({})
