import * as React from "react"
import { Center } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"

import {
  ReferralStatusTag,
  ReferralStatusTagProps,
} from "../../../../src/components/domain/referrals/ReferralStatusTag"

import { ReferralStatus } from "../../../../src/types"

const meta: Meta = {
  title: "Components/Domain/Referrals/ReferralStatusTag",
  component: ReferralStatusTag,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ReferralStatusTagProps> = (args) => (
  <Center py="4">
    <ReferralStatusTag {...args} />
  </Center>
)

export const Invited = Template.bind({})
export const Cancelled = Template.bind({})
export const Converted = Template.bind({})
export const Offboarded = Template.bind({})

Invited.args = {
  status: ReferralStatus.Invited,
}

Cancelled.args = {
  status: ReferralStatus.Cancelled,
}

Converted.args = {
  status: ReferralStatus.Converted,
}

Offboarded.args = {
  status: ReferralStatus.Offboarded,
}
