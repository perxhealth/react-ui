import * as React from "react"

import {
  Box,
  BoxProps,
  Stack,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react"

export interface TestingToolsProps {
  onApiUrlChange: (url: string) => void
  apiConfig: {
    initialPrefix?: string
    region: "au" | "us"
    environment: string
  }
}

export const TestingTools = (props: TestingToolsProps) => {
  // Destructure props to use directly
  const { onApiUrlChange } = props

  // Destructure API config to reference directly
  const {
    apiConfig: {
      initialPrefix: initialApiPrefix,
      region: apiRegion,
      environment: apiEnvironment,
    },
  } = props

  // Provide utility to toggle tools open/close
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Keep a piece of state to track the user's entered API prefix
  const [apiPrefix, setApiPrefix] = React.useState(initialApiPrefix)

  // Handle when the user has finished editing API config
  const onSaveApiUrl = React.useCallback(() => {
    const prefix = apiPrefix ? `${apiPrefix}-api` : `api`
    const url = `https://${prefix}-${apiRegion}.${apiEnvironment}.cloud.perxhealth.com/api`
    onApiUrlChange(url)
    onClose()
  }, [apiPrefix, apiRegion, apiEnvironment, onApiUrlChange, onClose])

  // Float the UI at the bottom of the user's viewport
  return (
    <>
      <Box pos="absolute" bottom="6" left="4">
        <Button onClick={onOpen} variant="outline" shadow="lg" bg="white">
          Open Testing Tools
        </Button>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="6" as={StripedBox}>
            <Box p="4" mb="20" rounded="xl" shadow="xl" bg="white">
              <Stack spacing="4" direction="row">
                <InputGroup size="lg">
                  <InputLeftAddon
                    fontFamily="mono"
                    fontSize="sm"
                    children="https://"
                  />
                  <Input
                    value={apiPrefix}
                    onChange={(e) => setApiPrefix(e.target.value)}
                    placeholder="Server ticket number, e.g. PS-1250"
                  />
                  <InputRightAddon fontFamily="mono" fontSize="sm">
                    -api-{apiRegion}.{apiEnvironment}.cloud.perxhealth.com/api
                  </InputRightAddon>
                </InputGroup>

                <Button onClick={onSaveApiUrl} size="lg">
                  Save
                </Button>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
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
