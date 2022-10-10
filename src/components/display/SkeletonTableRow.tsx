import * as React from "react"
import { Stack, Skeleton, Tr, Td, Table } from "@chakra-ui/react"

export interface SkeletonTableRowProps {
  columnCount?: number
}

export const SkeletonTableRow = (props: SkeletonTableRowProps) => {
  // Destructure props to use directly and provide defaults
  const { columnCount = 6 } = props

  // Prepare css width property for each 'column'
  const columnWidth = `calc(100% / ${columnCount})`

  // Build the amount of 'columns' we wish to display
  const columns = React.useMemo(() => {
    return Array.from(new Array(columnCount), () => (
      <Skeleton endColor="gray.300" height="14px" w={columnWidth} />
    ))
  }, [columnCount, columnWidth])

  return (
    <Table>
      <Tr>
        <Td colSpan={100}>
          <Stack direction="row" w="100%">
            {columns}
          </Stack>
        </Td>
      </Tr>
    </Table>
  )
}
