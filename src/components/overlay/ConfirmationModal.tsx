import * as React from "react"
import { HiOutlineCheckCircle } from "react-icons/hi"

import {
  Button,
  Stack,
  Icon,
  Modal,
  ModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToken,
} from "@chakra-ui/react"

// Note: `onClose` is omitted in favour of `onCancel` given we're semantically
// working with a Confirmation modal
export interface ConfirmationModalProps extends Omit<ModalProps, "onClose"> {
  onConfirm: () => void
  onCancel: () => void
  isOpen: boolean
  isLoading?: boolean
  headerText?: string
  children: JSX.Element | JSX.Element[]
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  // Destructure props to use directly
  const {
    onConfirm,
    onCancel,
    initialFocusRef,
    isOpen = true,
    headerText = "Are you sure?",
    isLoading = false,
    children,
  } = props

  // Retrieve gray from the theme for border colours
  const [gray100] = useToken("colors", ["gray.100"])

  // Render the modal!
  return (
    <Modal initialFocusRef={initialFocusRef} isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent rounded="lg" overflow="hidden" maxW="container.sm">
        <ModalHeader fontWeight="bold" borderTopRadius="lg" bg="gray.50">
          {headerText}
        </ModalHeader>

        <ModalCloseButton top="14px" />

        <ModalBody px="6" py="6">
          {children}
        </ModalBody>

        <ModalFooter px="6" borderTop={`solid 1px ${gray100}`} bg="gray.50">
          <Stack py="1" direction="row" align="center" justify="end">
            <Button
              size="lg"
              variant="outline"
              bg="white"
              isDisabled={isLoading}
              onClick={onCancel}>
              Cancel
            </Button>
            <Button
              size="lg"
              isLoading={isLoading}
              onClick={onConfirm}
              rightIcon={<Icon as={HiOutlineCheckCircle} w={6} h={6} />}>
              Confirm
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
