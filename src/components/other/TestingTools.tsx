import * as React from "react"

import {
  Box,
  BoxProps,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react"

export interface TestingToolsProps {
  onApiUrlChange?: (url: string) => void
}

export const TestingTools = () => {
  // Provide utility to toggle tools open/close
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Float the UI at the bottom of the user's viewport
  return (
    <Box padding="8" pos="fixed" bottom="0" left="0">
      {!isOpen && (
        <Button onClick={onOpen} variant="outline" shadow="lg">
          Open Testing Tools
        </Button>
      )}

      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="6" as={StripedBox}>
            <Box p="4" mb="20" rounded="xl" shadow="xl" bg="white">
              <p>dooty</p>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const StripedBox = (props: BoxProps) => (
  <Box
    {...props}
    bg="repeating-linear-gradient(
    45deg,
    #FEEBC8,
      #FEEBC8 10px,
      #FBD38D 10px,
      #FBD38D 20px

  )"
  />
)
