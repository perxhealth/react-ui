import * as React from "react"
import { Table } from "@tanstack/react-table"

import {
  Flex,
  Text,
  Button,
  ButtonGroup,
  Icon,
  VisuallyHidden,
} from "@chakra-ui/react"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

export interface DataTablePaginationProps<T> {
  table: Table<T>
}

export function DataTablePagination<T>(props: DataTablePaginationProps<T>) {
  // Destructure props to use directly
  const { table } = props

  // Massage the table's state in to an object whose keys are a bit more
  // declarative and simplistic
  const controls = {
    goNext: table.nextPage,
    goBack: table.previousPage,
    canGoNext: table.getCanNextPage(),
    canGoBack: table.getCanPreviousPage(),
    goFirstPage: () => table.setPageIndex(0),
    goLastPage: () => table.setPageIndex(table.getPageCount() - 1),
    currentPageNumber: table.getState().pagination.pageIndex + 1,
    totalPageCount: table.getPageCount(),
  }

  // Render pagination controls!
  return (
    <>
      <Flex w="100px" align="center" justify="center" fontSize="sm">
        <Text as="span" fontWeight="medium">
          Page {controls.currentPageNumber} of {controls.totalPageCount}
        </Text>
      </Flex>

      <ButtonGroup>
        <Button
          size="sm"
          variant="outline"
          onClick={controls.goFirstPage}
          isDisabled={!controls.canGoBack}>
          <VisuallyHidden>Go to first page</VisuallyHidden>
          <Icon as={ChevronsLeft} w="4" h="4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={controls.goBack}
          isDisabled={!controls.canGoBack}>
          <VisuallyHidden>Go to previous page</VisuallyHidden>
          <Icon as={ChevronLeft} w="4" h="4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={controls.goNext}
          isDisabled={!controls.canGoNext}>
          <VisuallyHidden>Go to next page</VisuallyHidden>
          <Icon as={ChevronRight} w="4" h="4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={controls.goLastPage}
          isDisabled={!controls.canGoNext}>
          <VisuallyHidden>Go to last page</VisuallyHidden>
          <Icon as={ChevronsRight} w="4" h="4" />
        </Button>
      </ButtonGroup>
    </>
  )
}
