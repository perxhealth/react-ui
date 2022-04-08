import * as React from "react"

export interface Props {
  title: string
}

export const Thing = (props: Props) => {
  return <p>Yo: {props.title}</p>
}
