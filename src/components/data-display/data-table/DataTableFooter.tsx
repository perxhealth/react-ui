import * as React from "react"
import { Box, Flex, Text, Select } from "@chakra-ui/react"
import { type Table } from "@tanstack/react-table"

import { DataTablePagination } from "./DataTablePagination"
import { DataTablePageSummary } from "./DataTablePageSummary"

export interface DataTableFooterProps<TData> {
  table: Table<TData>
  totalRows: number
}

export function DataTableFooter<TData>(props: DataTableFooterProps<TData>) {
  const { table, totalRows } = props

  const onChangePageSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    table.setPageSize(Number(event.target.value))
  }

  return (
    <Flex align="center" justify="between" padding="2" fontSize="sm">
      <DataTablePageSummary table={table} totalRows={totalRows} />

      <Flex align="center" gap="12">
        <Flex align="center" gap="2">
          <Text as="span" fontWeight="semibold" mr="1">
            Rows per page
          </Text>
          <Box bg="white" rounded="base">
            <Select onChange={onChangePageSize}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Select>
          </Box>
        </Flex>

        <Flex align="center" justify="end" gap="2" py="4">
          <DataTablePagination table={table} />
        </Flex>
      </Flex>
    </Flex>
  )
}
