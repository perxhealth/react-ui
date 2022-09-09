import * as React from "react"
import { Meta, Story } from "@storybook/react"

import {
  FullscreenLoading,
  Props,
} from "../../../src/components/overlay/FullscreenLoading"

const meta: Meta = {
  title: "Components/Overlay/FullscreenLoading",
  component: FullscreenLoading,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Props> = (args) => {
  return <FullscreenLoading {...args} />
}

export const Default = Template.bind({})
export const NoMessage = Template.bind({})

Default.args = {
  message: "Retrieving information",
}
