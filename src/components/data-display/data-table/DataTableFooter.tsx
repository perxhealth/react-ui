import * as React from "react"
import { Select } from "@chakra-ui/react"
import { type Table } from "@tanstack/react-table"

import { DataTablePagination, DataTablePageSummary } from "./"

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
    <div className="flex items-center justify-between py-2 px-2 text-sm">
      <DataTablePageSummary table={table} totalRows={totalRows} />

      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <span className="font-semibold mr-1">Rows per page</span>
          <div className="rounded bg-white">
            <Select onChange={onChangePageSize}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  )
}
