import * as React from "react"
import {v4 as uuid} from "uuid"
import { Tbody } from "@chakra-ui/react"

import { SkeletonTableRow } from "./SkeletonTableRow"

export interface SkeletonTableBodyProps {
  rowCount?: number
  columnCount?: number
}

export const SkeletonTableBody = (props: SkeletonTableBodyProps) => {
  // Destructure props to use directly and provide defaults
  const { rowCount = 10, columnCount = 6 } = props

  // Build each of the rows we want
  const skeletonTableRows = React.useMemo(() => {
    return Array.from(new Array(rowCount), () => (
      <SkeletonTableRow columnCount={columnCount} key={uuid()}/>
    ))
  }, [rowCount, columnCount])

  // Return the rows while also applying a fade-out gradient overlay
  return <Tbody>{skeletonTableRows}</Tbody>
}
