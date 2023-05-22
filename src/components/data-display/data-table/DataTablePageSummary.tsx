import * as React from "react"

import { Text } from "@chakra-ui/react"
import { Table } from "@tanstack/react-table"

export interface DataTablePageSummaryProps<TData> {
  table: Table<TData>
  totalRows: number
}

export function DataTablePageSummary<T>(props: DataTablePageSummaryProps<T>) {
  const { table, totalRows } = props
  const { pageIndex, pageSize } = table.getState().pagination

  const startIndex = pageIndex === 0 ? 1 : pageIndex * pageSize + 1
  const endIndex = Math.min(startIndex - 1 + pageSize, totalRows)

  if (totalRows <= 0) {
    return <Text color="blue.200">No records</Text>
  }

  return (
    <Text color="blue.200">
      Showing {startIndex}-{endIndex} of {totalRows} records
    </Text>
  )
}