import * as React from "react"
import { Tag, TagLeftIcon, TagProps } from "@chakra-ui/react"
import type { IconType } from "react-icons"

import {
  HiCheckCircle,
  HiX,
  HiBell,
  HiLockClosed,
  HiQuestionMarkCircle,
} from "react-icons/hi"

import { ReferralStatus } from "../../../types"

export interface ReferralStatusTagProps extends TagProps {
  status: ReferralStatus
}

export type TagStyle = {
  colour: string
  label: string
  icon: IconType
}

export const ReferralStatusTag = (props: ReferralStatusTagProps) => {
  // Destructure props to use directly
  const { status, ...tagProps } = props

  // Determine the colour and label of the tag
  const style = React.useMemo<TagStyle>(() => {
    switch (status) {
      case ReferralStatus.Invited:
        return { colour: "orange", label: "Invited", icon: HiBell }
      case ReferralStatus.Cancelled:
        return { colour: "red", label: "Cancelled", icon: HiX }
      case ReferralStatus.Converted:
        return { colour: "green", label: "Converted", icon: HiCheckCircle }
      case ReferralStatus.Offboarded:
        return { colour: "pink", label: "Offboarded", icon: HiLockClosed }
      default:
        return {
          colour: "blackAlpha",
          label: status,
          icon: HiQuestionMarkCircle,
        }
    }
  }, [status])

  return (
    <Tag colorScheme={style.colour} {...tagProps} textTransform="uppercase">
      <TagLeftIcon boxSize="13px" mr="1" as={style.icon} />
      {style.label}
    </Tag>
  )
}
