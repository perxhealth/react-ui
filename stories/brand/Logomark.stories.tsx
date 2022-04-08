import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { ImageProps } from "@chakra-ui/react"

import { Logomark } from "../../src/components/brand/Logomark"

const meta: Meta = {
  title: "Logomark",
  component: Logomark,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ImageProps> = (args) => <Logomark {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
