import * as React from "react"
import { Meta, Story } from "@storybook/react"

import {
  Pagination,
  PaginationProps,
} from "../../../src/components/display/Pagination"

const meta: Meta = {
  title: "Components/Display/Pagination",
  component: Pagination,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
export const OnFirstPage = Template.bind({})
export const OnLastPage = Template.bind({})

Default.args = {
  totalPages: 8,
  currentPage: 4,
}

OnFirstPage.args = {
  totalPages: 8,
  currentPage: 1,
}

OnLastPage.args = {
  totalPages: 8,
  currentPage: 8,
}
