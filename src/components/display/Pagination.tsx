import * as React from "react"
import { IconButton, Button, Center } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPreviousClick: (event: ButtonMouseEvent) => void
  onNextClick: (event: ButtonMouseEvent) => void
  onPageNumberClick: (event: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const {
    currentPage,
    totalPages,
    onPreviousClick,
    onNextClick,
    onPageNumberClick,
  } = props

  const isPreviousPageDisabled = React.useMemo(() => {
    return currentPage <= 1
  }, [currentPage])

  const isNextPageDisabled = React.useMemo(() => {
    return currentPage >= totalPages
  }, [totalPages, currentPage])

  return (
    <Center mt="6" gap="3">
      <IconButton
        aria-label="Previous Page"
        icon={<ChevronLeft />}
        variant="ghost"
        onClick={onPreviousClick}
        isDisabled={isPreviousPageDisabled}
      />

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber: number = index + 1
        const isSelectedPage = currentPage === pageNumber
        return (
          <Button
            key={pageNumber}
            isDisabled={isSelectedPage}
            variant={isSelectedPage ? "solid" : "outline"}
            onClick={() => onPageNumberClick(pageNumber)}>
            {pageNumber}
          </Button>
        )
      })}

      <IconButton
        aria-label="Next Page"
        icon={<ChevronRight />}
        variant="ghost"
        onClick={onNextClick}
        isDisabled={isNextPageDisabled}
      />
    </Center>
  )
}
