import * as React from "react"

import {
  Button,
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
} from "@chakra-ui/react"

export interface FormDrawerProps extends DrawerProps {
  formId: string
  title: string
  isOpen: boolean
  isSubmitting: boolean
  onClose: () => void
  children: JSX.Element | JSX.Element[]
}

export const FormDrawer = (props: FormDrawerProps) => {
  // Destructure props to use directly
  const { formId, children, title, isOpen, isSubmitting, onClose, ...rest } =
    props

  // Render an opinionated drawer specifically designed for displaying a form
  //  1. Form controls are anchored to the bottom of the drawer
  //  2. The drawer's body will scroll in the case of very long forms
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" {...rest}>
      <DrawerOverlay />
      <DrawerContent margin="4" rounded="lg">
        <DrawerCloseButton mt="1.5" />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <DrawerFooter
          bg="gray.50"
          borderTop="solid 1px"
          borderColor="gray.100"
          roundedBottomLeft="lg"
          roundedBottomRight="lg"
          justifyContent="center">
          <Stack direction="row" w="full">
            <Button
              variant="outline"
              size="lg"
              bg="white"
              w="full"
              onClick={onClose}
              isDisabled={isSubmitting}>
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              w="full"
              form={formId}
              isLoading={isSubmitting}
              isDisabled={isSubmitting}>
              Submit
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
