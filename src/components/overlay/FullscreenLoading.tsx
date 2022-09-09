import * as React from "react"

import {
  Flex,
  FlexProps,
  Stack,
  Text,
  CircularProgress,
} from "@chakra-ui/react"

export interface Props extends FlexProps {
  message?: string
}

export const FullscreenLoading = (props: Props) => {
  // Destructure props to use directly
  const { message } = props

  // Render a full screen spinner letting the user know something is going on
  // with an optional message
  return (
    <Flex h="100vh" align="center" justify="center" {...props}>
      <Stack align="center" justify="center" spacing="4">
        <CircularProgress isIndeterminate />
        {message && <Text>{message}</Text>}
      </Stack>
    </Flex>
  )
}
