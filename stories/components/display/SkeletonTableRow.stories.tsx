import * as React from "react"
import { Table, Tbody } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import {
  SkeletonTableRow,
  SkeletonTableRowProps,
} from "../../../src/components/display/SkeletonTableRow"

const meta: Meta = {
  title: "Components/Display/SkeletonTableRow",
  component: SkeletonTableRow,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<SkeletonTableRowProps> = (args) => (
  <Table>
    <Tbody>
      <SkeletonTableRow {...args} />
    </Tbody>
  </Table>
)

export const Default = Template.bind({})
