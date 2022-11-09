import * as React from "react"
import { Box, Flex, Stack, StackDivider, Text, Button } from "@chakra-ui/react"

export interface ToastNotificationProps {
  title: string
  subtitle?: string
  customButtonText?: string
  showCloseButton?: boolean
  onClose?: () => void
  onCustomButtonClick?: () => void
  status?: "success" | "error" | "warning" | "info"
}

export const ToastNotification = (props: ToastNotificationProps) => {
  // Destructure props to use directly
  const {
    title,
    onClose,
    customButtonText,
    onCustomButtonClick,
    showCloseButton = true,
    subtitle = null,
    status = "info",
  } = props

  // Determine the overall colour scheme from `props.status`
  const statusColour = React.useMemo(() => {
    switch (status) {
      case "success":
        return "green.500"
      case "error":
        return "red.500"
      case "warning":
        return "orange.500"
      default:
        return "blue.500"
    }
  }, [status])

  // Memoize whether we'll be showing two, one or no buttons
  const buttonCount = React.useMemo<number>(() => {
    if (showCloseButton || customButtonText) {
      return showCloseButton && customButtonText ? 2 : 1
    } else {
      return 0
    }
  }, [showCloseButton, customButtonText])

  // Render a custom styled ToastNotification
  return (
    <Box rounded="md" shadow="lg" overflow="hidden">
      <Flex bg="white" borderLeft="solid 10px" borderColor={statusColour}>
        <Stack spacing="0" px="5" py="3" pr="10" flex="1" bg="white">
          <Text fontSize="lg" color="gray.800">
            {title}
          </Text>

          {subtitle && (
            <Text fontSize="md" color="gray.600" lineHeight="5" pb="1">
              {subtitle}
            </Text>
          )}
        </Stack>

        <Stack
          spacing="0"
          minH="100%"
          minW="115px"
          borderLeft="solid 1px"
          borderColor="gray.100"
          divider={<StackDivider />}>
          {customButtonText && (
            <Button
              onClick={onCustomButtonClick}
              minH={buttonCount > 1 ? "50%" : "100%"}
              fontWeight="normal"
              size="md"
              variant="ghost"
              rounded="none">
              {customButtonText}
            </Button>
          )}

          {showCloseButton && (
            <Button
              onClick={onClose}
              minH={buttonCount > 1 ? "50%" : "100%"}
              fontWeight="normal"
              size="md"
              variant="ghost"
              rounded="none">
              Close
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  )
}
