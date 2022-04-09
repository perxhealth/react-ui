import * as React from "react"
import { Image, ImageProps } from "@chakra-ui/react"

export interface Props extends ImageProps {
  size: number
}

export const Logomark = (props: Props) => {
  const { size } = props

  return (
    <Image
      src="https://play-lh.googleusercontent.com/zW9pdKa1xnRcm4DI3v5nJC9UmNeHBEfUvBZmLaRu5BlwuLgN5tqo90vlkkhWY6bDcFc"
      alt="Perx Health"
      width={size}
      height={size}
      {...props}
    />
  )
}
