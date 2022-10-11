import * as React from "react"
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
  <SkeletonTableBody {...args} />
)

export const Default = Template.bind({})
