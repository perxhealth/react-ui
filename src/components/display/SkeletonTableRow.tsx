import * as React from "react"
import { Stack, Skeleton, Tr, Td } from "@chakra-ui/react"

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
    let iterator: number = 0
    return Array.from(new Array(columnCount), () => (
      <Skeleton
        key={++iterator}
        width={columnWidth}
        endColor="gray.300"
        height="14px"
      />
    ))
  }, [columnCount, columnWidth])

  return (
    <Tr>
      <Td colSpan={100}>
        <Stack direction="row" w="100%">
          {columns}
        </Stack>
      </Td>
    </Tr>
  )
}
