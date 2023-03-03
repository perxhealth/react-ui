import * as React from "react"
import { Tag, TagLeftIcon, TagProps } from "@chakra-ui/react"
import { CheckCircle2, X, Bell, Lock, HelpCircle } from "lucide-react"

import { ReferralStatus } from "../../../types"

export interface ReferralStatusTagProps extends TagProps {
  status: ReferralStatus
}

export type TagStyle = {
  colour: string
  label: string
  icon: any
}

export const ReferralStatusTag = (props: ReferralStatusTagProps) => {
  // Destructure props to use directly
  const { status, ...tagProps } = props

  // Determine the colour and label of the tag
  const style = React.useMemo<TagStyle>(() => {
    switch (status) {
      case ReferralStatus.Invited:
        return { colour: "orange", label: "Invited", icon: Bell }
      case ReferralStatus.Cancelled:
        return { colour: "red", label: "Cancelled", icon: X }
      case ReferralStatus.Converted:
        return { colour: "green", label: "Converted", icon: CheckCircle2 }
      case ReferralStatus.Offboarded:
        return { colour: "pink", label: "Offboarded", icon: Lock }
      default:
        return {
          colour: "blackAlpha",
          label: status,
          icon: HelpCircle,
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
