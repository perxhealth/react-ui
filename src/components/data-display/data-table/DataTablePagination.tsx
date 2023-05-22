import * as React from "react"
import { Select, Button } from "@chakra-ui/react"
import { Table } from "@tanstack/react-table"

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
  const { table } = props

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

  return (
    <>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {controls.currentPageNumber} of {controls.totalPageCount}
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex bg-white"
          onClick={controls.goFirstPage}
          disabled={!controls.canGoBack}>
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="h-8 w-8 p-0 bg-white"
          onClick={controls.goBack}
          disabled={!controls.canGoBack}>
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="h-8 w-8 p-0 bg-white"
          onClick={controls.goNext}
          disabled={!controls.canGoNext}>
          <span className="sr-only">Go to next page</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex bg-white"
          onClick={controls.goLastPage}
          disabled={!controls.canGoNext}>
          <span className="sr-only">Go to last page</span>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  )
}
