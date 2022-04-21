import * as React from "react"

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react"

export interface ConfirmationModalProps {
  onConfirm: () => void
  onCancel: () => void
  isOpen: boolean
  headerText?: string
  children: JSX.Element | JSX.Element[]
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    onConfirm,
    onCancel,
    isOpen,
    headerText = "Are you sure?",
    children,
  } = props

  return (
    <Modal isOpen={isOpen} onClose={onCancel} isCentered>
      <ModalContent rounded="lg">
        <ModalHeader bg="gray.50" borderTopRadius="lg">
          {headerText}
        </ModalHeader>
        <ModalBody pt="4">{children}</ModalBody>

        <ModalFooter display="flex" justifyContent="center" pb="6">
          <Button colorScheme="blue" mr={3} onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
