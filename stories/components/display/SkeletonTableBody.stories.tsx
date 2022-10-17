import * as React from "react"
import { Table } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import {
  SkeletonTableBody,
  SkeletonTableBodyProps,
} from "../../../src/components/display/SkeletonTableBody"

const meta: Meta = {
  title: "Components/Display/SkeletonTableBody",
  component: SkeletonTableBody,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<SkeletonTableBodyProps> = (args) => (
  <Table>
    <SkeletonTableBody {...args} />
  </Table>
)

export const Default = Template.bind({})
