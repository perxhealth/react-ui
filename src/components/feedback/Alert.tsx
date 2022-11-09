import * as React from "react"

import {
  Alert,
  AlertProps,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  CloseButton,
} from "@chakra-ui/react"

export interface NoticeProps extends AlertProps {
  title: string
  description?: string
  onClose?: () => void
}

export const Notice = (props: NoticeProps) => {
  // Destructure props to use directly
  const { title, description, onClose, ...alertProps } = props

  // Render the alert, which is a thin wrapper around Chakra's markup
  // with some opinionated, overridable defaults
  return (
    <Alert variant="left-accent" rounded="xl" {...alertProps}>
      <AlertIcon />

      <Stack spacing="0">
        <AlertTitle fontWeight="semibold">{title}</AlertTitle>
        <AlertDescription>{description || ""}</AlertDescription>
      </Stack>

      {onClose && (
        <CloseButton
          onClick={onClose}
          position="absolute"
          right="8px"
          top="8px"
        />
      )}
    </Alert>
  )
}
