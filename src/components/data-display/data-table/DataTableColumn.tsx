import * as React from "react"
import { Column } from "@tanstack/react-table"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react"

import {
  ChevronsUpDown,
  ArrowUp,
  ArrowDown,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  EyeOff,
} from "lucide-react"

export interface DataTableColumnProps {
  column: Column<unknown, unknown>
  label: string
}

export function DataTableColumn(props: DataTableColumnProps) {
  const { column, label } = props
  const isSorted = column.getIsSorted()

  const onToggleSort = (direction: "asc" | "desc") => {
    column.toggleSorting(direction === "desc")
  }

  const onHide = () => {
    column.toggleVisibility(false)
  }

  return (
    <Menu>
      <MenuButton as={Box} cursor="pointer">
        <Flex align="center">
          {label}
          {!isSorted && (
            <Icon as={ChevronsUpDown} mt="-0.5" ml="2" h="3" w="4" />
          )}
          {isSorted === "asc" && (
            <Icon as={ArrowUp} mt="-0.5" ml="2" h="3" w="4" />
          )}
          {isSorted === "desc" && (
            <Icon as={ArrowDown} mt="-0.5" ml="2" h="3" w="3" />
          )}
        </Flex>
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => onToggleSort("asc")}>
          <Icon as={ArrowUpNarrowWide} mr="2" h="4" w="4" />
          Asc
        </MenuItem>

        <MenuItem onClick={() => onToggleSort("desc")}>
          <Icon as={ArrowDownNarrowWide} mr="2" h="4" w="4" />
          Desc
        </MenuItem>

        <MenuDivider />

        <MenuItem onClick={onHide}>
          <Icon as={EyeOff} mr="2" h="4" w="4" />
          Hide
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
