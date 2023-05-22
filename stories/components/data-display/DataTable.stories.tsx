import * as React from "react"
import { Box } from "@chakra-ui/react"
import { ColumnDef } from "@tanstack/react-table"
import { Meta, Story } from "@storybook/react"

import {
  DataTable,
  DataTableProps,
} from "../../../src/components/data-display/data-table/DataTable"

const meta: Meta = {
  title: "Components/DataDisplay/DataTable",
  component: DataTable,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export interface ExampleData {
  firstName: string
  lastName: string
  age: number
  email: string
}

const exampleData: ExampleData[] = [
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
  { firstName: "Billy", lastName: "Bob", age: 32, email: "billy@bob.com" },
]

const exampleColumns: Array<ColumnDef<ExampleData>> = [
  { accessorKey: "firstName", header: "First name" },
  { accessorKey: "lastName", header: "Last name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "email", header: "Email address" },
]

const Template: Story<DataTableProps<ExampleData, unknown>> = (args) => (
  <Box px="2" py="6">
    <DataTable columns={exampleColumns} data={exampleData} />
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
